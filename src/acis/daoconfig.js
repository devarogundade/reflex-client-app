export default {
  modelAddress: "ct_BTjBznmg5UMUMpK3zECmvQ1Ntfoo75wubmSo9uyYJPYv4BPu2",
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
      "contract": {
        "functions": [
          {
            "arguments": [
              {
                "name": "_1",
                "type": "string"
              },
              {
                "name": "_2",
                "type": "int"
              },
              {
                "name": "_3",
                "type": "string"
              }
            ],
            "name": "init",
            "payable": false,
            "returns": "void",
            "stateful": false
          },
          {
            "arguments": [],
            "name": "meta_info",
            "payable": false,
            "returns": "IRfDAOToken.meta_info",
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
                "name": "_1",
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
                "name": "_1",
                "type": "IRfDAOToken.allowance_accounts"
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
                "name": "_1",
                "type": {
                  "map": [
                    "address",
                    "int"
                  ]
                }
              }
            ],
            "name": "allocate",
            "payable": false,
            "returns": "unit",
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "_1",
                "type": "address"
              },
              {
                "name": "_2",
                "type": "int"
              }
            ],
            "name": "transfer",
            "payable": false,
            "returns": "unit",
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "_1",
                "type": "address"
              },
              {
                "name": "_2",
                "type": "int"
              }
            ],
            "name": "create_allowance",
            "payable": false,
            "returns": "unit",
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "_1",
                "type": "address"
              },
              {
                "name": "_2",
                "type": "address"
              },
              {
                "name": "_3",
                "type": "int"
              }
            ],
            "name": "transfer_allowance",
            "payable": false,
            "returns": "unit",
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "_1",
                "type": "address"
              },
              {
                "name": "_2",
                "type": "int"
              }
            ],
            "name": "mint",
            "payable": false,
            "returns": "unit",
            "stateful": true
          }
        ],
        "kind": "contract_interface",
        "name": "IRfDAOToken",
        "payable": false,
        "typedefs": [
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
                "name": "_1",
                "type": "string"
              },
              {
                "name": "_2",
                "type": "string"
              },
              {
                "name": "_3",
                "type": "int"
              }
            ],
            "name": "init",
            "payable": false,
            "returns": "void",
            "stateful": false
          },
          {
            "arguments": [],
            "name": "meta_info",
            "payable": false,
            "returns": "IRfDAOReward.meta_info",
            "stateful": false
          },
          {
            "arguments": [
              {
                "name": "_1",
                "type": "int"
              }
            ],
            "name": "metadata",
            "payable": false,
            "returns": {
              "option": [
                "IRfDAOReward.metadata"
              ]
            },
            "stateful": false
          },
          {
            "arguments": [
              {
                "name": "_1",
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
                "name": "_1",
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
                "name": "_1",
                "type": "int"
              }
            ],
            "name": "burn",
            "payable": false,
            "returns": "unit",
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "_1",
                "type": "address"
              },
              {
                "name": "_2",
                "type": {
                  "option": [
                    "IRfDAOReward.metadata"
                  ]
                }
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
            "name": "mint",
            "payable": false,
            "returns": "unit",
            "stateful": true
          }
        ],
        "kind": "contract_interface",
        "name": "IRfDAOReward",
        "payable": false,
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
                  "type": "IRfDAOReward.metadata_type"
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
        "functions": [
          {
            "arguments": [
              {
                "name": "_1",
                "type": "address"
              }
            ],
            "name": "getSubdomain",
            "payable": false,
            "returns": "IRfSubdomain.subdomain",
            "stateful": false
          },
          {
            "arguments": [
              {
                "name": "_1",
                "type": "string"
              }
            ],
            "name": "register",
            "payable": false,
            "returns": "unit",
            "stateful": true
          }
        ],
        "kind": "contract_interface",
        "name": "IRfSubdomain",
        "payable": false,
        "typedefs": [
          {
            "name": "subdomain",
            "typedef": {
              "record": [
                {
                  "name": "name",
                  "type": "string"
                },
                {
                  "name": "last_update",
                  "type": "int"
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
              "Distribute": [
                "address",
                "int",
                "int"
              ]
            },
            {
              "DAOCreated": [
                "address",
                "address",
                "int"
              ]
            },
            {
              "DAOMemberAdded": [
                "address",
                "int"
              ]
            },
            {
              "ProposalCreated": [
                "int",
                "int"
              ]
            },
            {
              "ProposalVote": [
                "address",
                "bool",
                "int"
              ]
            },
            {
              "ProposalExecuted": [
                "int",
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
                "name": "minDuration",
                "type": "int"
              },
              {
                "name": "earlyExecution",
                "type": "bool"
              },
              {
                "name": "metaTrx",
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
                "name": "token_model",
                "type": "IRfDAOToken"
              },
              {
                "name": "reward_model",
                "type": "IRfDAOReward"
              },
              {
                "name": "rfSubdomain",
                "type": "IRfSubdomain"
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
                "name": "allocations",
                "type": {
                  "map": [
                    "address",
                    "int"
                  ]
                }
              }
            ],
            "name": "allocate",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "members",
                "type": {
                  "map": [
                    "address",
                    "int"
                  ]
                }
              }
            ],
            "name": "multisig",
            "payable": false,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "title",
                "type": "string"
              },
              {
                "name": "summary",
                "type": "string"
              },
              {
                "name": "treasureAmount",
                "type": "int"
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
                "name": "gasless",
                "type": "bool"
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
            "name": "distribute_proposal_powers",
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
              },
              {
                "name": "gasless",
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
              },
              {
                "name": "summary",
                "type": "string"
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
            "name": "topup_metatx",
            "payable": true,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "summary",
                "type": "string"
              }
            ],
            "name": "topup_treasure",
            "payable": true,
            "returns": {
              "tuple": []
            },
            "stateful": true
          },
          {
            "arguments": [
              {
                "name": "wallet",
                "type": "address"
              },
              {
                "name": "value",
                "type": "int"
              }
            ],
            "name": "addDAOMember",
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
                "IRfDAOToken"
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
                "IRfDAOReward"
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
            "arguments": [],
            "name": "membership",
            "payable": false,
            "returns": "RfDAO.membership",
            "stateful": false
          },
          {
            "arguments": [],
            "name": "get_state",
            "payable": false,
            "returns": "RfDAO.state",
            "stateful": false
          }
        ],
        "kind": "contract_main",
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
                  "IRfDAOToken"
                ]
              }
            },
            {
              "name": "proposals",
              "type": "RfDAO.proposals"
            },
            {
              "name": "treasure",
              "type": "RfDAO.treasure"
            },
            {
              "name": "proposalId",
              "type": "int"
            },
            {
              "name": "token_model",
              "type": "IRfDAOToken"
            },
            {
              "name": "reward_model",
              "type": "IRfDAOReward"
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
            "name": "treasure",
            "typedef": {
              "record": [
                {
                  "name": "balance",
                  "type": "int"
                },
                {
                  "name": "locked",
                  "type": "int"
                },
                {
                  "name": "allIn",
                  "type": "int"
                },
                {
                  "name": "allOut",
                  "type": "int"
                },
                {
                  "name": "history",
                  "type": {
                    "list": [
                      "RfDAO.treasure_history"
                    ]
                  }
                }
              ]
            },
            "vars": []
          },
          {
            "name": "treasure_history",
            "typedef": {
              "record": [
                {
                  "name": "summary",
                  "type": "string"
                },
                {
                  "name": "timestamp",
                  "type": "int"
                },
                {
                  "name": "amount",
                  "type": "int"
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
                  "name": "metaTrx",
                  "type": "bool"
                },
                {
                  "name": "metaTrxBal",
                  "type": "int"
                },
                {
                  "name": "daoReward",
                  "type": {
                    "option": [
                      "IRfDAOReward"
                    ]
                  }
                },
                {
                  "name": "metaFeeReceiver",
                  "type": "address"
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
                },
                {
                  "name": "treasureAmount",
                  "type": "int"
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
    }
  ]
};