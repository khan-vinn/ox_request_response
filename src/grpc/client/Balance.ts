import {balanceService} from './clientBalance'
import { AddBalanceRequest, AddBalanceResponse } from "../models/customer_service_pb";
import { Balance } from '../../types/Balance'

export const addBalance = async (data: Balance) => {
    const request: AddBalanceRequest = new AddBalanceRequest()
    request.setUserId(data.user_id)
    request.setAmount(data.balance)
    try {
      const response = await balanceService.addBalance(request)
      return response.toObject()
    } catch (e:any) {
      console.log(e)
      return
    }
  }