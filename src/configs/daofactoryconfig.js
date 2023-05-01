export default {
    contractAddress: "ct_2s3sQek29uo54T3TUe7c4ue835fbQV9vXnyCJdmZgKD67zpsEq",
    contractSource: `contract ProfileContract =
    record user = { name  : string, about : string, image : string, owner : address }
    entrypoint empty_profile : () => user
    entrypoint get_all_profile : () => map(address, user)
  
  include "List.aes"
  contract SuperChatFriend =
  
    record state =
      { profile       : ProfileContract,
        requests      : map(address, list(address)),
        friends       : map(address, list(address)) }
  
    stateful entrypoint init(profile_contract: ProfileContract) : state =
      { profile       = profile_contract,
        requests      = {},
        friends       = {} }
  
    public stateful entrypoint send_friend_request(friends_address: address) : list(address) =
      let empty_address_list : list(address) = [Call.caller]
  
      switch(Map.lookup(friends_address, state.requests))
        None    =>   only_one_friend_request(friends_address, empty_address_list)
        Some(x) => modify_friends_request(x, empty_address_list, friends_address)
  
    private stateful function only_one_friend_request(friends_address: address, new_friend_list: list(address)) : list(address) =
      put(state{requests[friends_address] = new_friend_list})
      new_friend_list
  
    private stateful function modify_friends_request(old_list: list(address), new_friend_list: list(address), friends_address: address) : list(address) =
      let new_list : list(address) = new_friend_list ++ old_list
  
      put(state{ requests[friends_address] = new_list })
      new_list
  
    public entrypoint get_friend_request() : list(ProfileContract.user) =
      List.map((request) => Map.lookup_default(request, state.profile.get_all_profile(), state.profile.empty_profile()), Map.lookup_default(Call.caller, state.requests, []))
  
    public stateful entrypoint reject_friend_request(new_friends_address: address) : list(address) =
      let friend_request_list : list(address) = Map.lookup_default(Call.caller, state.requests, [])
      let new_friend_request_list : list(address) = List.filter((request) => request != new_friends_address, friend_request_list)
      
      put(state{ requests[Call.caller] = new_friend_request_list })
      new_friend_request_list
  
    public stateful entrypoint accept_friend_request(new_friends_address: address) : list(address) =
      let friend_request_list : list(address) = Map.lookup_default(Call.caller, state.requests, [])
      let new_friend_request_list : list(address) = List.filter((request) => request != new_friends_address, friend_request_list)
  
      let friends_list : list(address) = Map.lookup_default(Call.caller, state.friends, [])
      let request_senders_friend_list : list(address) = Map.lookup_default(new_friends_address, state.friends, [])
  
      let new_request_senders_friend_list : list(address) = Call.caller::request_senders_friend_list
      let new_friends_list : list(address) = new_friends_address::friends_list
  
      let new_friends_map : map(address, list(address)) = state.friends{ [Call.caller] = new_friends_list, [new_friends_address] = new_request_senders_friend_list }
      put(state{ friends = new_friends_map, requests[Call.caller] = new_friend_request_list })
      new_friend_request_list
  
    public entrypoint get_friends() : list(ProfileContract.user) =
      List.map((friend) => Map.lookup_default(friend, state.profile.get_all_profile(), state.profile.empty_profile()), Map.lookup_default(Call.caller, state.friends, []))`,
};