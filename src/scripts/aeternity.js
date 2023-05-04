import { BigNumber } from 'bignumber.js'
import daotoken from '../acis/daotoken';
import daoreward from '../acis/daoreward'
import daofactoryconfig from '../acis/daofactoryconfig';
import daoconfig from '../acis/daoconfig';
import Converter from './Converter'

let factoryContract = null


// DAO

export const daoState = async (sdk, contractAddress) => {
    const contract = await sdk.initializeContract({
        aci: daoconfig.aci,
        address: contractAddress
    })

    return await contract.get_state()
}

export const createProposal = async (sdk, contractAddress, proposal) => {
    const contract = await sdk.initializeContract({
        aci: daoconfig.aci,
        address: contractAddress
    })

    return await contract.create_proposal(
        proposal.title,
        proposal.summary,
        proposal.startedOn,
        proposal.endedOn,
        false // gasless
    )
}

export const voteProposal = async (sdk, contractAddress, proposalId, cast, amount) => {
    const contract = await sdk.initializeContract({
        aci: daoconfig.aci,
        address: contractAddress
    })

    return await contract.vote_proposal(
        proposalId,
        amount,
        cast,
        false // gasless
    )
}

// DAO FACTORY

export const factoryState = async (sdk) => {
    let contract = null

    if (!factoryContract) {
        factoryContract = await sdk.initializeContract({
            aci: daofactoryconfig.aci,
            address: daofactoryconfig.contractAddress
        })
    }

    contract = factoryContract

    return await contract.get_state()
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
        tokenAllocations.set(allocation.address, Converter.toWei(allocation.tokens))
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
        tokenAllocations, {
        omitUnknown: true
    }
    )
}

// DAO TOKEN

export const tokenBalances = async (sdk, tokenAddress) => {
    const tokenContract = await sdk.initializeContract({
        aci: daotoken.aci,
        address: tokenAddress
    })

    return await tokenContract.balances()
}

export const getTokenBalance = async (sdk, tokenAddress, userAddress) => {
    const tokenContract = await sdk.initializeContract({
        sourceCode: daotoken.aci,
        address: tokenAddress
    })

    return await tokenContract.balance(userAddress)
}

export const approve = async (sdk, tokenAddress, spender, amount) => {
    const tokenContract = await sdk.initializeContract({
        sourceCode: daotoken.aci,
        address: tokenAddress
    })

    const { decodedResult } = await tokenContract.allowance(sdk.address, spender)

    const allowanceAmount = decodedResult !== undefined
        ? new BigNumber(decodedResult).multipliedBy(-1).plus(amount).toNumber()
        : amount;

    if (decodedResult !== undefined) {
        return await tokenContract.change_allowance(spender, allowanceAmount)
    } else {
        return await tokenContract.create_allowance(spender, allowanceAmount)
    }
}

export const allowance = async (sdk, tokenAddress, userAddress, spender) => {
    const tokenContract = await sdk.initializeContract({
        sourceCode: daotoken.aci,
        address: tokenAddress
    })

    return await tokenContract.allowance(userAddress, spender)
}

// DAO REWARD

export const rewardState = async (sdk, rewardAddress) => {
    const tokenContract = await sdk.initializeContract({
        aci: daoreward.aci,
        address: rewardAddress
    })

    return await tokenContract.get_state()
}
