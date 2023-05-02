export default {
  contractAddress: "ct_9HpxmXsBPy4DeSDF1BcUm39o4cE1pzPgvrEq685jKQMXsX5H5",
  aci: [
    {
      "namespace": {
        "name": "Option",
        "typedefs": []
      }
    },
    {
      "namespace": {
        "name": "ListInternal",
        "typedefs": []
      }
    },
    {
      "namespace": {
        "name": "List",
        "typedefs": []
      }
    },
    {
      "namespace": {
        "name": "String",
        "typedefs": []
      }
    },
    {
      "namespace": {
        "name": "Pair",
        "typedefs": []
      }
    },
    {
      "namespace": {
        "name": "Set",
        "typedefs": [
          {
            "name": "set",
            "typedef": {
              "record": [
                {
                  "name": "to_map",
                  "type": {
                    "map": [
                      "'a",
                      "unit"
                    ]
                  }
                }
              ]
            },
            "vars": [
              {
                "name": "'a"
              }
            ]
          }
        ]
      }
    },
    {
      "namespace": {
        "name": "Utils",
        "typedefs": []
      }
    },
    {
      "contract": {
        "functions": [
          {
            "arguments": [
              {
                "name": "_1",
                "type": {
                  "option": [
                    "address"
                  ]
                }
              },
              {
                "name": "_2",
                "type": "int"
              },
              {
                "name": "_3",
                "type": {
                  "option": [
                    "string"
                  ]
                }
              }
            ],
            "name": "on_aex141_received",
            "payable": false,
            "returns": "bool",
            "stateful": false
          }
        ],
        "kind": "contract_interface",
        "name": "IAEX141NFTReceiver",
        "payable": false,
        "typedefs": []
      }
    },
    {
      "contract": {
        "event": {
          "variant": [
            {
              "Transfer": [
                "address",
                "address",
                "int"
              ]
            },
            {
              "Approval": [
                "address",
                "address",
                "int",
                "string"
              ]
            },
            {
              "ApprovalForAll": [
                "address",
                "address",
                "string"
              ]
            },
            {
              "Mint": [
                "address",
                "int"
              ]
            },
            {
              "TokenLimit": [
                "int"
              ]
            },
            {
              "TokenLimitDecrease": [
                "int",
                "int"
              ]
            },
            {
              "Burn": [
                "address",
                "int"
              ]
            }
          ]
        },
        "functions": [
          {
            "arguments": [
              {
                "name": "name",
                "type": "string"
              },
              {
                "name": "symbol",
                "type": "string"
              },
              {
                "name": "token_limit",
                "type": "int"
              }
            ],
            "name": "init",
            "payable": false,
            "returns": "RfDAOReward.state",
            "stateful": true
          },
          {
            "arguments": [],
            "name": "aex141_extensions",
            "payable": false,
            "returns": {
              "list": [
                "string"
              ]
            },
            "stateful": false
          },
          {
            "arguments": [],
            "name": "meta_info",
            "payable": false,
            "returns": "RfDAOReward.meta_info",
            "stateful": false
          },
          {
            "arguments": [
              {
                "name": "token_id",
                "type": "int"
              }
            ],
            "name": "metadata",
            "payable": false,
            "returns": {
              "option": [
                "RfDAOReward.metadata"
              ]
            },
            "stateful": false
          },
          {
            "arguments": [],
            "name": "total_supply",
            "payable": false,
            "returns": "int",
            "stateful": false
          },
          {
            "arguments": [
              {
                "name": "owner",
                "type": "address"
              }
            ],
            "name": "balance",
            "payable": false,
            "returns": {
              "option": [
                "int"
              ]
            },
            "stateful": false
          },
          {
            "arguments": [
              {
                "name": "token_id",
                "type": "int"
              }
            ],
            "name": "owner",
            "payable": false,
            "returns": {
              "option": [
                "address"
              ]
            },
            "stateful": false
          },
          {
            "arguments": [
              {
                "name": "to",
                "type": "address"
              },
              {
                "name": "token_id",
                "type": "int"
              },
              {
                "name": "data",
                "type": {
                  "option": [
                    "string"
                  ]
                }
              }
            ],
            "name": "transfer",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "token_id",
                "type": "int"
              }
            ],
            "name": "transfer_to_contract",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "approved",
                "type": "address"
              },
              {
                "name": "token_id",
                "type": "int"
              },
              {
                "name": "enabled",
                "type": "bool"
              }
            ],
            "name": "approve",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "operator",
                "type": "address"
              },
              {
                "name": "enabled",
                "type": "bool"
              }
            ],
            "name": "approve_all",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "token_id",
                "type": "int"
              }
            ],
            "name": "get_approved",
            "payable": false,
            "returns": {
              "option": [
                "address"
              ]
            },
            "stateful": false
          },
          {
            "arguments": [
              {
                "name": "token_id",
                "type": "int"
              },
              {
                "name": "a",
                "type": "address"
              }
            ],
            "name": "is_approved",
            "payable": false,
            "returns": "bool",
            "stateful": false
          },
          {
            "arguments": [
              {
                "name": "owner",
                "type": "address"
              },
              {
                "name": "operator",
                "type": "address"
              }
            ],
            "name": "is_approved_for_all",
            "payable": false,
            "returns": "bool",
            "stateful": false
          },
          {
            "arguments": [
              {
                "name": "to",
                "type": "address"
              },
              {
                "name": "metadata",
                "type": {
                  "option": [
                    "RfDAOReward.metadata"
                  ]
                }
              },
              {
                "name": "data",
                "type": {
                  "option": [
                    "string"
                  ]
                }
              }
            ],
            "name": "mint",
            "payable": false,
            "returns": "int",
            "stateful": true
          },
          {
            "arguments": [],
            "name": "token_limit",
            "payable": false,
            "returns": "int",
            "stateful": false
          },
          {
            "arguments": [
              {
                "name": "new_limit",
                "type": "int"
              }
            ],
            "name": "decrease_token_limit",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "token_id",
                "type": "int"
              }
            ],
            "name": "burn",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "owner",
                "type": "address"
              }
            ],
            "name": "get_owned_tokens",
            "payable": false,
            "returns": {
              "list": [
                "int"
              ]
            },
            "stateful": false
          }
        ],
        "kind": "contract_child",
        "name": "RfDAOReward",
        "payable": false,
        "state": {
          "record": [
            {
              "name": "owner",
              "type": "address"
            },
            {
              "name": "meta_info",
              "type": "RfDAOReward.meta_info"
            },
            {
              "name": "token_to_owners",
              "type": {
                "map": [
                  "int",
                  "address"
                ]
              }
            },
            {
              "name": "owners_to_tokens",
              "type": {
                "map": [
                  "address",
                  {
                    "Set.set": [
                      "int"
                    ]
                  }
                ]
              }
            },
            {
              "name": "balances",
              "type": {
                "map": [
                  "address",
                  "int"
                ]
              }
            },
            {
              "name": "approvals",
              "type": {
                "map": [
                  "int",
                  "address"
                ]
              }
            },
            {
              "name": "operators",
              "type": {
                "map": [
                  "address",
                  {
                    "map": [
                      "address",
                      "bool"
                    ]
                  }
                ]
              }
            },
            {
              "name": "metadata",
              "type": {
                "map": [
                  "int",
                  "RfDAOReward.metadata"
                ]
              }
            },
            {
              "name": "total_supply",
              "type": "int"
            },
            {
              "name": "token_limit",
              "type": "int"
            },
            {
              "name": "counter",
              "type": "int"
            }
          ]
        },
        "typedefs": [
          {
            "name": "metadata_type",
            "typedef": {
              "variant": [
                {
                  "URL": []
                },
                {
                  "OBJECT_ID": []
                },
                {
                  "MAP": []
                }
              ]
            },
            "vars": []
          },
          {
            "name": "metadata",
            "typedef": {
              "variant": [
                {
                  "MetadataIdentifier": [
                    "string"
                  ]
                },
                {
                  "MetadataMap": [
                    {
                      "map": [
                        "string",
                        "string"
                      ]
                    }
                  ]
                }
              ]
            },
            "vars": []
          },
          {
            "name": "meta_info",
            "typedef": {
              "record": [
                {
                  "name": "name",
                  "type": "string"
                },
                {
                  "name": "symbol",
                  "type": "string"
                },
                {
                  "name": "base_url",
                  "type": {
                    "option": [
                      "string"
                    ]
                  }
                },
                {
                  "name": "metadata_type",
                  "type": "RfDAOReward.metadata_type"
                }
              ]
            },
            "vars": []
          }
        ]
      }
    },
    {
      "contract": {
        "event": {
          "variant": [
            {
              "Transfer": [
                "address",
                "address",
                "int"
              ]
            },
            {
              "Allowance": [
                "address",
                "address",
                "int"
              ]
            },
            {
              "Burn": [
                "address",
                "int"
              ]
            },
            {
              "Mint": [
                "address",
                "int"
              ]
            },
            {
              "Swap": [
                "address",
                "int"
              ]
            }
          ]
        },
        "functions": [
          {
            "arguments": [],
            "name": "aex9_extensions",
            "payable": false,
            "returns": {
              "list": [
                "string"
              ]
            },
            "stateful": false
          },
          {
            "arguments": [
              {
                "name": "name",
                "type": "string"
              },
              {
                "name": "decimals",
                "type": "int"
              },
              {
                "name": "symbol",
                "type": "string"
              },
              {
                "name": "owner",
                "type": "address"
              },
              {
                "name": "allocations",
                "type": {
                  "map": [
                    "address",
                    "int"
                  ]
                }
              }
            ],
            "name": "init",
            "payable": false,
            "returns": "RfDAOToken.state",
            "stateful": false
          },
          {
            "arguments": [],
            "name": "meta_info",
            "payable": false,
            "returns": "RfDAOToken.meta_info",
            "stateful": false
          },
          {
            "arguments": [],
            "name": "total_supply",
            "payable": false,
            "returns": "int",
            "stateful": false
          },
          {
            "arguments": [],
            "name": "owner",
            "payable": false,
            "returns": "address",
            "stateful": false
          },
          {
            "arguments": [],
            "name": "balances",
            "payable": false,
            "returns": "RfDAOToken.balances",
            "stateful": false
          },
          {
            "arguments": [
              {
                "name": "account",
                "type": "address"
              }
            ],
            "name": "balance",
            "payable": false,
            "returns": {
              "option": [
                "int"
              ]
            },
            "stateful": false
          },
          {
            "arguments": [],
            "name": "swapped",
            "payable": false,
            "returns": {
              "map": [
                "address",
                "int"
              ]
            },
            "stateful": false
          },
          {
            "arguments": [],
            "name": "allowances",
            "payable": false,
            "returns": "RfDAOToken.allowances",
            "stateful": false
          },
          {
            "arguments": [
              {
                "name": "allowance_accounts",
                "type": "RfDAOToken.allowance_accounts"
              }
            ],
            "name": "allowance",
            "payable": false,
            "returns": {
              "option": [
                "int"
              ]
            },
            "stateful": false
          },
          {
            "arguments": [
              {
                "name": "from_account",
                "type": "address"
              }
            ],
            "name": "allowance_for_caller",
            "payable": false,
            "returns": {
              "option": [
                "int"
              ]
            },
            "stateful": false
          },
          {
            "arguments": [
              {
                "name": "from_account",
                "type": "address"
              },
              {
                "name": "to_account",
                "type": "address"
              },
              {
                "name": "value",
                "type": "int"
              }
            ],
            "name": "transfer_allowance",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "for_account",
                "type": "address"
              },
              {
                "name": "value",
                "type": "int"
              }
            ],
            "name": "create_allowance",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "for_account",
                "type": "address"
              },
              {
                "name": "value_change",
                "type": "int"
              }
            ],
            "name": "change_allowance",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "for_account",
                "type": "address"
              }
            ],
            "name": "reset_allowance",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "to_account",
                "type": "address"
              },
              {
                "name": "value",
                "type": "int"
              }
            ],
            "name": "transfer",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "value",
                "type": "int"
              }
            ],
            "name": "burn",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "account",
                "type": "address"
              },
              {
                "name": "value",
                "type": "int"
              }
            ],
            "name": "mint",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [],
            "name": "swap",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "account",
                "type": "address"
              }
            ],
            "name": "check_swap",
            "payable": false,
            "returns": "int",
            "stateful": true
          }
        ],
        "kind": "contract_child",
        "name": "RfDAOToken",
        "payable": false,
        "state": {
          "record": [
            {
              "name": "owner",
              "type": "address"
            },
            {
              "name": "total_supply",
              "type": "int"
            },
            {
              "name": "balances",
              "type": "RfDAOToken.balances"
            },
            {
              "name": "meta_info",
              "type": "RfDAOToken.meta_info"
            },
            {
              "name": "allowances",
              "type": "RfDAOToken.allowances"
            },
            {
              "name": "swapped",
              "type": {
                "map": [
                  "address",
                  "int"
                ]
              }
            }
          ]
        },
        "typedefs": [
          {
            "name": "meta_info",
            "typedef": {
              "record": [
                {
                  "name": "name",
                  "type": "string"
                },
                {
                  "name": "symbol",
                  "type": "string"
                },
                {
                  "name": "decimals",
                  "type": "int"
                }
              ]
            },
            "vars": []
          },
          {
            "name": "allowance_accounts",
            "typedef": {
              "record": [
                {
                  "name": "from_account",
                  "type": "address"
                },
                {
                  "name": "for_account",
                  "type": "address"
                }
              ]
            },
            "vars": []
          },
          {
            "name": "balances",
            "typedef": {
              "map": [
                "address",
                "int"
              ]
            },
            "vars": []
          },
          {
            "name": "allowances",
            "typedef": {
              "map": [
                "RfDAOToken.allowance_accounts",
                "int"
              ]
            },
            "vars": []
          }
        ]
      }
    },
    {
      "contract": {
        "functions": [
          {
            "arguments": [
              {
                "name": "name",
                "type": "string"
              },
              {
                "name": "summary",
                "type": "string"
              },
              {
                "name": "subdomain",
                "type": "string"
              },
              {
                "name": "links",
                "type": {
                  "option": [
                    "string"
                  ]
                }
              },
              {
                "name": "logo",
                "type": {
                  "option": [
                    "string"
                  ]
                }
              },
              {
                "name": "tokenName",
                "type": "string"
              },
              {
                "name": "tokenSymbol",
                "type": "string"
              },
              {
                "name": "proposalCreation",
                "type": "int"
              },
              {
                "name": "participation",
                "type": "int"
              },
              {
                "name": "minCreation",
                "type": "int"
              },
              {
                "name": "threshold",
                "type": "int"
              },
              {
                "name": "minParticipation",
                "type": "int"
              },
              {
                "name": "multisigMembers",
                "type": {
                  "map": [
                    "address",
                    "int"
                  ]
                }
              },
              {
                "name": "minDuration",
                "type": "int"
              },
              {
                "name": "earlyExecution",
                "type": "bool"
              },
              {
                "name": "metaTransaction",
                "type": "bool"
              },
              {
                "name": "reward",
                "type": "int"
              },
              {
                "name": "owner",
                "type": "address"
              },
              {
                "name": "allocations",
                "type": {
                  "map": [
                    "address",
                    "int"
                  ]
                }
              }
            ],
            "name": "init",
            "payable": false,
            "returns": "RfDAO.state",
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "rfDaoToken",
                "type": "RfDAOToken"
              },
              {
                "name": "title",
                "type": "string"
              },
              {
                "name": "summary",
                "type": "string"
              },
              {
                "name": "startedOn",
                "type": "int"
              },
              {
                "name": "endedOn",
                "type": "int"
              }
            ],
            "name": "create_proposal",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "rfDAOToken",
                "type": "RfDAOToken"
              },
              {
                "name": "proposalId",
                "type": "int"
              }
            ],
            "name": "distribute_proposal_tokens",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "proposalId",
                "type": "int"
              }
            ],
            "name": "end_proposal_early",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "proposalId",
                "type": "int"
              },
              {
                "name": "amount",
                "type": "int"
              },
              {
                "name": "cast",
                "type": "bool"
              }
            ],
            "name": "vote_proposal",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "proposalId",
                "type": "int"
              }
            ],
            "name": "execute_proposal",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [],
            "name": "daoToken",
            "payable": false,
            "returns": {
              "option": [
                "address"
              ]
            },
            "stateful": false
          },
          {
            "arguments": [],
            "name": "daoReward",
            "payable": false,
            "returns": {
              "option": [
                "address"
              ]
            },
            "stateful": false
          },
          {
            "arguments": [],
            "name": "metadata",
            "payable": false,
            "returns": "RfDAO.metadata",
            "stateful": false
          },
          {
            "arguments": [],
            "name": "governance",
            "payable": false,
            "returns": "RfDAO.governance",
            "stateful": false
          },
          {
            "arguments": [
              {
                "name": "proposalId",
                "type": "int"
              }
            ],
            "name": "proposals",
            "payable": false,
            "returns": "RfDAO.proposal",
            "stateful": false
          }
        ],
        "kind": "contract_child",
        "name": "RfDAO",
        "payable": false,
        "state": {
          "record": [
            {
              "name": "owner",
              "type": "address"
            },
            {
              "name": "metadata",
              "type": "RfDAO.metadata"
            },
            {
              "name": "membership",
              "type": "RfDAO.membership"
            },
            {
              "name": "governance",
              "type": "RfDAO.governance"
            },
            {
              "name": "daoToken",
              "type": {
                "option": [
                  "address"
                ]
              }
            },
            {
              "name": "proposals",
              "type": "RfDAO.proposals"
            },
            {
              "name": "proposalId",
              "type": "int"
            }
          ]
        },
        "typedefs": [
          {
            "name": "metadata",
            "typedef": {
              "record": [
                {
                  "name": "name",
                  "type": "string"
                },
                {
                  "name": "summary",
                  "type": "string"
                },
                {
                  "name": "subdomain",
                  "type": "string"
                },
                {
                  "name": "links",
                  "type": {
                    "option": [
                      "string"
                    ]
                  }
                },
                {
                  "name": "logo",
                  "type": {
                    "option": [
                      "string"
                    ]
                  }
                }
              ]
            },
            "vars": []
          },
          {
            "name": "membership",
            "typedef": {
              "record": [
                {
                  "name": "proposalCreation",
                  "type": "int"
                },
                {
                  "name": "participation",
                  "type": "int"
                },
                {
                  "name": "minCreation",
                  "type": "int"
                },
                {
                  "name": "multisigMembers",
                  "type": {
                    "map": [
                      "address",
                      "int"
                    ]
                  }
                }
              ]
            },
            "vars": []
          },
          {
            "name": "governance",
            "typedef": {
              "record": [
                {
                  "name": "threshold",
                  "type": "int"
                },
                {
                  "name": "minParticipation",
                  "type": "int"
                },
                {
                  "name": "minDuration",
                  "type": "int"
                },
                {
                  "name": "earlyExecution",
                  "type": "bool"
                },
                {
                  "name": "metaTransaction",
                  "type": "bool"
                },
                {
                  "name": "daoReward",
                  "type": {
                    "option": [
                      "address"
                    ]
                  }
                }
              ]
            },
            "vars": []
          },
          {
            "name": "proposal",
            "typedef": {
              "record": [
                {
                  "name": "distributed",
                  "type": "bool"
                },
                {
                  "name": "executed",
                  "type": "bool"
                },
                {
                  "name": "startedOn",
                  "type": "int"
                },
                {
                  "name": "endedOn",
                  "type": "int"
                },
                {
                  "name": "title",
                  "type": "string"
                },
                {
                  "name": "summary",
                  "type": "string"
                },
                {
                  "name": "createdOn",
                  "type": "int"
                },
                {
                  "name": "owner",
                  "type": "address"
                },
                {
                  "name": "votes",
                  "type": {
                    "map": [
                      "address",
                      "int"
                    ]
                  }
                },
                {
                  "name": "approves",
                  "type": {
                    "list": [
                      "address"
                    ]
                  }
                },
                {
                  "name": "disapproves",
                  "type": {
                    "list": [
                      "address"
                    ]
                  }
                }
              ]
            },
            "vars": []
          },
          {
            "name": "proposals",
            "typedef": {
              "map": [
                "int",
                "RfDAO.proposal"
              ]
            },
            "vars": []
          }
        ]
      }
    },
    {
      "contract": {
        "event": {
          "variant": [
            {
              "DAOCreated": [
                "address",
                "address",
                "int"
              ]
            }
          ]
        },
        "functions": [
          {
            "arguments": [],
            "name": "init",
            "payable": false,
            "returns": "RfDAOFactory.state",
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "name",
                "type": "string"
              },
              {
                "name": "summary",
                "type": "string"
              },
              {
                "name": "subdomain",
                "type": "string"
              },
              {
                "name": "links",
                "type": {
                  "option": [
                    "string"
                  ]
                }
              },
              {
                "name": "logo",
                "type": {
                  "option": [
                    "string"
                  ]
                }
              },
              {
                "name": "tokenName",
                "type": "string"
              },
              {
                "name": "tokenSymbol",
                "type": "string"
              },
              {
                "name": "proposalCreation",
                "type": "int"
              },
              {
                "name": "participation",
                "type": "int"
              },
              {
                "name": "minCreation",
                "type": "int"
              },
              {
                "name": "threshold",
                "type": "int"
              },
              {
                "name": "minParticipation",
                "type": "int"
              },
              {
                "name": "multisigMembers",
                "type": {
                  "map": [
                    "address",
                    "int"
                  ]
                }
              },
              {
                "name": "minDuration",
                "type": "int"
              },
              {
                "name": "earlyExecution",
                "type": "bool"
              },
              {
                "name": "metaTransaction",
                "type": "bool"
              },
              {
                "name": "reward",
                "type": "int"
              },
              {
                "name": "allocations",
                "type": {
                  "map": [
                    "address",
                    "int"
                  ]
                }
              }
            ],
            "name": "create_dao",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "owner",
                "type": "address"
              }
            ],
            "name": "get_owners_dao",
            "payable": false,
            "returns": {
              "list": [
                "address"
              ]
            },
            "stateful": false
          },
          {
            "arguments": [],
            "name": "get_daos",
            "payable": false,
            "returns": {
              "list": [
                "address"
              ]
            },
            "stateful": false
          }
        ],
        "kind": "contract_main",
        "name": "RfDAOFactory",
        "payable": false,
        "state": {
          "record": [
            {
              "name": "owner",
              "type": "address"
            },
            {
              "name": "ownersDao",
              "type": "RfDAOFactory.ownersDao"
            },
            {
              "name": "daos",
              "type": {
                "list": [
                  "address"
                ]
              }
            }
          ]
        },
        "typedefs": [
          {
            "name": "ownersDao",
            "typedef": {
              "map": [
                "address",
                {
                  "list": [
                    "address"
                  ]
                }
              ]
            },
            "vars": []
          }
        ]
      }
    }
  ]
};