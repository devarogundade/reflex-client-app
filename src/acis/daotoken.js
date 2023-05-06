export default {
    modelAddress: "ct_2esK75y3Adue2dBHveiR1uv6XBEzH8HVPFWgwYLY545cLwtjp8",
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
                }
              ],
              "name": "init",
              "payable": false,
              "returns": "RfDAOToken.state",
              "stateful": false
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
              "arguments": [],
              "name": "get_state",
              "payable": false,
              "returns": "RfDAOToken.state",
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
          "kind": "contract_main",
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
              },
              {
                "name": "allocated",
                "type": "bool"
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
      }
    ]
};