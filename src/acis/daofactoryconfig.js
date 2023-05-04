export default {
  contractAddress: "ct_2RLLWY2xv2CZtUZ3tpzvcVkXVxkcr57FUJ5htVGEYcF7T1bWxT",
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
        "functions": [
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
            "arguments": [],
            "name": "metadata",
            "payable": false,
            "returns": "IRfDAO.metadata",
            "stateful": false
          },
          {
            "arguments": [],
            "name": "governance",
            "payable": false,
            "returns": "IRfDAO.governance",
            "stateful": false
          },
          {
            "arguments": [],
            "name": "membership",
            "payable": false,
            "returns": "IRfDAO.membership",
            "stateful": false
          },
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
                "type": "string"
              },
              {
                "name": "_4",
                "type": {
                  "option": [
                    "string"
                  ]
                }
              },
              {
                "name": "_5",
                "type": {
                  "option": [
                    "string"
                  ]
                }
              },
              {
                "name": "_6",
                "type": "string"
              },
              {
                "name": "_7",
                "type": "string"
              },
              {
                "name": "_8",
                "type": "int"
              },
              {
                "name": "_9",
                "type": "int"
              },
              {
                "name": "_10",
                "type": "int"
              },
              {
                "name": "_11",
                "type": "int"
              },
              {
                "name": "_12",
                "type": "int"
              },
              {
                "name": "_13",
                "type": "int"
              },
              {
                "name": "_14",
                "type": "bool"
              },
              {
                "name": "_15",
                "type": "bool"
              },
              {
                "name": "_16",
                "type": "int"
              },
              {
                "name": "_17",
                "type": "address"
              },
              {
                "name": "_18",
                "type": "IRfDAOToken"
              },
              {
                "name": "_19",
                "type": "IRfDAOReward"
              }
            ],
            "name": "init",
            "payable": false,
            "returns": "unit",
            "stateful": true
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
            "returns": "unit",
            "stateful": true
          }
        ],
        "kind": "contract_interface",
        "name": "IRfDAO",
        "payable": false,
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
            "arguments": [
              {
                "name": "token_model",
                "type": "IRfDAOToken"
              },
              {
                "name": "reward_model",
                "type": "IRfDAOReward"
              },
              {
                "name": "dao_model",
                "type": "IRfDAO"
              }
            ],
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
                "name": "metaTrx",
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
            "arguments": [],
            "name": "get_state",
            "payable": false,
            "returns": "RfDAOFactory.state",
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
                  "IRfDAO"
                ]
              }
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
              "name": "dao_model",
              "type": "IRfDAO"
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
                    "IRfDAO"
                  ]
                }
              ]
            },
            "vars": []
          },
          {
            "name": "daoState",
            "typedef": {
              "record": [
                {
                  "name": "contractAddress",
                  "type": "address"
                },
                {
                  "name": "metadata",
                  "type": "IRfDAO.metadata"
                },
                {
                  "name": "governance",
                  "type": "IRfDAO.governance"
                },
                {
                  "name": "membership",
                  "type": "IRfDAO.membership"
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