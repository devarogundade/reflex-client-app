export default {
  modelAddress: "ct_2Mzr1RwYin63VKEvgG1guGCjPukPFRddhzZRw4Cq9BaxqHWM2i",
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
            "arguments": [],
            "name": "get_state",
            "payable": false,
            "returns": "RfDAOReward.state",
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
        "kind": "contract_main",
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
    }
  ]
};