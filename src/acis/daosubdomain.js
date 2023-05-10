export default {
    modelAddress: "ct_2vQCkUVN4tWAffkRUWPPgyptYzmCTpknfSVRSr2HcfsRGs58mm",
    aci: [
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
            "contract": {
                "functions": [
                    {
                        "arguments": [],
                        "name": "init",
                        "payable": false,
                        "returns": "RfDSubdomain.state",
                        "stateful": true
                    },
                    {
                        "arguments": [],
                        "name": "get_state",
                        "payable": false,
                        "returns": "RfDSubdomain.state",
                        "stateful": false
                    },
                    {
                        "arguments": [
                            {
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "getSubdomain",
                        "payable": false,
                        "returns": "RfDSubdomain.subdomain",
                        "stateful": false
                    },
                    {
                        "arguments": [
                            {
                                "name": "name",
                                "type": "string"
                            }
                        ],
                        "name": "register",
                        "payable": false,
                        "returns": {
                            "tuple": []
                        },
                        "stateful": true
                    }
                ],
                "kind": "contract_main",
                "name": "RfDSubdomain",
                "payable": false,
                "state": {
                    "record": [
                        {
                            "name": "subdomains",
                            "type": {
                                "map": [
                                    "address",
                                    "RfDSubdomain.subdomain"
                                ]
                            }
                        },
                        {
                            "name": "availability",
                            "type": {
                                "map": [
                                    "string",
                                    "bool"
                                ]
                            }
                        }
                    ]
                },
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
        }
    ]
};