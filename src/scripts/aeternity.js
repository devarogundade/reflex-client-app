import { BigNumber } from 'bignumber.js'
import daotoken from '../configs/daotoken';

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