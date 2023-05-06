import daotoken from '../acis/daotoken';
import daoreward from '../acis/daoreward'
import daofactoryconfig from '../acis/daofactoryconfig';
import daoconfig from '../acis/daoconfig';
import Converter from './Converter'

let factoryContract = null


// DAO

export const fundTreasure = async (sdk, contractAddress, treasure) => {
    const contract = await sdk.initializeContract({
        aci: daoconfig.aci,
        address: contractAddress
    })

    return await contract.topup_treasure(treasure.summary,
        { amount: Converter.toWei(treasure.amount) }
    )
}

export const addMember = async (sdk, contractAddress, member) => {
    const contract = await sdk.initializeContract({
        aci: daoconfig.aci,
        address: contractAddress
    })

    return await contract.addDAOMember(
        member.address,
        Converter.toWei(member.value), {
        omitUnknown: true
    }
    )
}

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

    const startedOn = (new Date(proposal.startedOn).getTime())
    const endedOn = (new Date(proposal.endedOn).getTime())

    return await contract.create_proposal(
        proposal.title,
        proposal.summary,
        Converter.toWei(proposal.treasureAmount != '' ? proposal.treasureAmount : 0),
        startedOn,
        endedOn,
        false // gasless
    )
}

export const voteProposal = async (sdk, contractAddress, proposalId, vote) => {
    const contract = await sdk.initializeContract({
        aci: daoconfig.aci,
        address: contractAddress
    })

    return await contract.vote_proposal(
        proposalId,
        vote.amount,
        vote.cast,
        vote.gasless, {
            omitUnknown: true
        }
    )
}

export const executeProposal = async (sdk, contractAddress, proposalId, summary) => {
    const contract = await sdk.initializeContract({
        aci: daoconfig.aci,
        address: contractAddress
    })

    return await contract.execute_proposal(
        proposalId,
        summary
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
        multisigMembers.set(member.address, Converter.toWei(member.powers))
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
        Converter.toWei(dao.minCreation),
        dao.threshold,
        Converter.toWei(dao.minParticipation),
        multisigMembers,
        (dao.minDuration * 24 * 3600  * 1000),
        dao.earlyExecution,
        dao.metaTransaction,
        dao.reward,
        tokenAllocations, {
        omitUnknown: true
    }
    )
}

// DAO TOKEN

export const tokenState = async (sdk, tokenAddress) => {
    const tokenContract = await sdk.initializeContract({
        aci: daotoken.aci,
        address: tokenAddress
    })

    return await tokenContract.get_state()
}

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
        aci: daotoken.aci,
        address: tokenAddress
    })

    const { decodedResult } = await allowance(sdk, tokenAddress, sdk.address, spender)

    if (decodedResult !== undefined) {
        return await tokenContract.change_allowance(spender.replace('ct', 'ak'), amount)
    } else {
        return await tokenContract.create_allowance(spender.replace('ct', 'ak'), amount)
    }
}

export const allowance = async (sdk, tokenAddress, userAddress, spender) => {
    const tokenContract = await sdk.initializeContract({
        aci: daotoken.aci,
        address: tokenAddress
    })

    return await tokenContract.allowance({ from_account: userAddress, for_account: spender.replace('ct', 'ak') })
}

// DAO REWARD

export const rewardState = async (sdk, rewardAddress) => {
    const tokenContract = await sdk.initializeContract({
        aci: daoreward.aci,
        address: rewardAddress
    })

    return await tokenContract.get_state()
}
