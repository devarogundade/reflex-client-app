import { BigNumber } from 'bignumber.js'
import daotoken from '../configs/daotoken';
import daofactoryconfig from '../configs/daofactoryconfig';
import daoconfig from '../configs/daoconfig';

let factoryContract = null

export const dao = async (sdk, contractAddress) => {
    console.log(contractAddress);
    let contract = await sdk.initializeContract({
        aci: daoconfig.aci,
        address: contractAddress
    })

    return await contract.daoToken()
}

export const ownersDao = async (sdk, userAddress) => {
    let contract = null

    if (!factoryContract) {
        factoryContract = await sdk.initializeContract({
            aci: daofactoryconfig.aci,
            address: daofactoryconfig.contractAddress
        })
    }

    contract = factoryContract

    return await contract.get_owners_dao(userAddress)
}

export const daos = async (sdk) => {
    let contract = null

    if (!factoryContract) {
        factoryContract = await sdk.initializeContract({
            aci: daofactoryconfig.aci,
            address: daofactoryconfig.contractAddress
        })
    }

    contract = factoryContract

    return await contract.get_daos()
}

export const deployDao = async (sdk, dao) => {
    let contract = null

    if (!factoryContract) {
        factoryContract = await sdk.initializeContract({
            aci: daofactoryconfig.aci,
            address: daofactoryconfig.contractAddress
        })
    }

    contract = factoryContract

    const tokenAllocations = new Map()
    dao.tokenAllocations.forEach(allocation => {
        tokenAllocations.set(allocation.address, allocation.tokens)
    });

    const multisigMembers = new Map()
    dao.multisigMembers.forEach(member => {
        multisigMembers.set(member.address, member.powers)
    });

    return await contract.create_dao(
        dao.name, 
        dao.summary, 
        dao.subdomain, 
        JSON.stringify(dao.links), 
        dao.logoUri, 
        dao.tokenName, 
        dao.tokenSymbol, 
        dao.proposalCreation, 
        dao.participation, 
        dao.minCreation, 
        dao.threshold, 
        dao.minParticipation, 
        multisigMembers, 
        dao.minDuration, 
        dao.earlyExecution, 
        dao.metaTransaction, 
        dao.reward, 
        tokenAllocations
    )
}

export const getTokenBalance = async (sdk, tokenAddress, userAddress) => {
    const tokenContract = await sdk.initializeContract({ sourceCode: daotoken.contractSource, address: tokenAddress })

    const { decodedResult } = await tokenContract.balance(userAddress);

    return decodedResult
}

export const createOrChangeAllowance = async (sdk, tokenAddress, spender, amount) => {
    const tokenContract = await sdk.initializeContract({ sourceCode: daotoken.contractSource, address: tokenAddress })

    const { decodedResult } = await tokenContract.allowance(sdk.address, spender);

    const allowanceAmount = decodedResult !== undefined
        ? new BigNumber(decodedResult).multipliedBy(-1).plus(amount).toNumber()
        : amount;

    let tx

    if (decodedResult !== undefined) {
        tx = await tokenContract.change_allowance(spender, allowanceAmount);
    } else {
        tx = await tokenContract.create_allowance(spender, allowanceAmount);
    }

    return tx
};
