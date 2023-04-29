<template>
    <section>
        <div class="app_width">
            <div class="create_head">
                <div class="create_head_title">
                    <p>Create your DAO</p>
                    <p>Step {{ step }} of 3</p>
                </div>

                <div class="progress">
                    <div class="progress_bar" :style="`width: ${(step / 3) * 100}%`"></div>
                </div>

                <div class="create_head_desc" v-if="step == 1">
                    <h1>Describe your DAO</h1>
                    <p>Name and define your DAO so new contributors know they've come to the right place. This information
                        is displayed on the DAO Explore page and can be changed with a vote. For ideas on DAO branding, read
                        our guide.</p>
                </div>

                <div class="create_head_desc" v-if="step == 2">
                    <h1>Define membership</h1>
                    <p>Decide the type of voting your DAO uses. You can change these settings with a vote. For help deciding
                        which type of governance is best for you, read this guide.</p>
                </div>

                <div class="create_head_desc" v-if="step == 3">
                    <h1>Select governance settings</h1>
                    <p>These settings determine how voting works in your DAO. Read best practices for governance settings in
                        this guide.</p>
                </div>
            </div>

            <div class="dao_form">
                <div class="form">
                    <div class="label" v-show="step == 1">
                        <p class="title">DAO name</p>
                        <p class="desc">Maximum of 128 characters</p>
                        <div class="input">
                            <input type="text" placeholder="Type your DAO's name...">
                        </div>
                        <p class="count">0/128</p>
                    </div>

                    <div class="label" v-show="step == 1">
                        <p class="title">ENS Subdomain</p>
                        <p class="desc">This will be your DAO’s unique ENS subdomain, created automatically for you.
                            Lowercase letters, numbers, and the dash '-' are all acceptable characters; ideally, the
                            character count should be under 128.</p>
                        <div class="input">
                            <input type="text" placeholder="Type your DAO's name...">
                            <div class="input_tag">.dao.aes</div>
                        </div>
                        <p class="count">0/128</p>
                    </div>

                    <div class="label" v-show="step == 1">
                        <p class="title">Logo <span>Optional</span></p>
                        <p class="desc">This will be your DAO’s unique ENS subdomain, created automatically for you.
                            Lowercase letters, numbers, and the dash '-' are all acceptable characters; ideally, the
                            character count should be under 128.</p>

                        <div class="input_file">
                            <IconAdd />
                            <input type="file" hidden>
                        </div>
                    </div>

                    <div class="label" v-show="step == 1">
                        <p class="title">Description</p>
                        <p class="desc">Describe your DAO's purpose in a few sentences. This is listed on the Explore page
                            so new contributors can find you.
                        </p>
                        <div class="input">
                            <textarea rows="5" type="text" placeholder="Type your summary..."></textarea>
                        </div>
                    </div>

                    <div class="label" v-show="step == 1">
                        <p class="title">Links</p>
                        <p class="desc">Links to your DAO's website, social media profiles, Discord, or other places your
                            community gathers.</p>
                        <div class="link_container" v-if="links.length > 0">
                            <div class="link_grid">
                                <p class="link_name">Name / Description</p>
                                <p class="link_name">Link</p>
                                <p></p>
                            </div>
                            <div class="link_grid" v-for="link, i in links" :key="i">
                                <div class="input">
                                    <input type="text" v-model="link.name" placeholder="Medium, Discord, etc.">
                                </div>
                                <div class="input">
                                    <input type="text" v-model="link.link" placeholder="https://">
                                </div>
                                <IconTrash v-on:click="removeLink(i)" />
                            </div>
                        </div>
                        <button v-if="links.length < 5" v-on:click="addLink()">Add link</button>
                    </div>

                    <!--  -->

                    <div class="label" v-show="step == 2">
                        <p class="title">Who can participate in governance?</p>
                        <div class="participate_options">
                            <div class="option">
                                <div class="option_text">
                                    <h6>Token holders</h6>
                                    <p>Tokens act as voting chips. The more tokens you hold, the more weight your vote has.
                                        1 token equals 1 vote.</p>
                                </div>
                                <div class="option_dot">
                                    <div class="inner_dot"></div>
                                </div>
                            </div>

                            <div class="option">
                                <div class="option_text">
                                    <h6>Multisig members</h6>
                                    <p>Only multisig members can vote. 1 wallet address equals 1 approval.</p>
                                </div>
                                <div class="option_dot">
                                    <div class="inner_dot"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="label" v-show="step == 2">
                        <p class="title">Mint your token</p>
                        <p class="desc">Define the token details and distribute tokens to a core team and DAO treasury. For
                            more on token minting best practices, read this guide</p>
                    </div>

                    <div class="label" v-show="step == 2">
                        <p class="title">Name</p>
                        <p class="desc">The full name of the token. Example: Uniswap</p>
                        <div class="input">
                            <input type="text" placeholder="">
                        </div>
                    </div>

                    <div class="label" v-show="step == 2">
                        <p class="title">Symbol</p>
                        <p class="desc">The abbreviation of the token. Example: UNI</p>
                        <div class="input">
                            <input type="text" placeholder="">
                        </div>
                    </div>

                    <div class="label" v-show="step == 2">
                        <p class="title">Distribute tokens</p>
                        <p class="desc">Add the wallets you'd like to distribute tokens to. If you need help distributing
                            tokens</p>
                        <div class="address_container" v-if="addresses.length > 0">
                            <div class="address_grid">
                                <p class="address_name">Address</p>
                                <p class="address_name">Tokens</p>
                                <p class="address_name">Allocation</p>
                                <p></p>
                            </div>
                            <div class="address_grid" v-for="address, i in addresses" :key="i">
                                <div class="input">
                                    <input type="text" v-model="address.address" placeholder="0x...">
                                </div>
                                <div class="input">
                                    <input type="number" v-model="address.tokens" min="0" placeholder="0"
                                        style="text-align: center;">
                                </div>
                                <div class="input">
                                    <input type="text" disabled value="100%"
                                        style="background-color: var(--background-gray); text-align: center;">
                                </div>
                                <IconTrash v-on:click="removeWallet(i)" />
                            </div>
                        </div>
                        <button v-if="addresses.length < 15" v-on:click="addWallet()">Add wallet</button>
                    </div>

                    <div class="label" v-show="step == 2">
                        <p class="title">Proposal creation</p>
                        <p class="desc">Specify who is permitted to create proposals and what the minimum token requirement
                            is.</p>
                        <div class="specify_container">
                            <div class="participate_options">
                                <p class="title">Who is eligible?</p>
                                <div class="option">
                                    <div class="option_text">
                                        <h6>Token holders</h6>
                                        <p>Only token holders with a certain number of tokens are eligible to create
                                            proposals.</p>
                                    </div>
                                    <div class="option_dot">
                                        <div class="inner_dot"></div>
                                    </div>
                                </div>

                                <div class="option">
                                    <div class="option_text">
                                        <h6>Any wallet</h6>
                                        <p>Any wallet can create proposals.</p>
                                    </div>
                                    <div class="option_dot">
                                        <div class="inner_dot"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="tokens_required">
                                <p class="title">Minimum tokens Required</p>
                                <div class="input">
                                    <input type="number" min="1" placeholder="0" style="text-align: center;">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--  -->

                    <div class="label" v-show="step == 3">
                        <p class="title">Support threshold</p>
                        <p class="desc">Support threshold is the percentage of tokens or that are required to vote “Yes” for
                            a proposal to be approved, calculated based on total tokens that voted.</p>
                        <div class="input">
                            <input type="number" placeholder="50">
                            <div class="input_tag">percernt</div>
                        </div>
                    </div>

                    <div class="label" v-show="step == 3">
                        <p class="title">Minimum participation</p>
                        <p class="desc">Minimum participation is the percentage of the token supply that must vote on a
                            proposal for the vote to be valid. Make sure you set this at a low level that your DAO can meet,
                            so you don't lock your voting process.</p>
                        <div class="input">
                            <input type="number" placeholder="50">
                            <div class="input_tag">1 token</div>
                        </div>
                    </div>

                    <div class="label" v-show="step == 3">
                        <p class="title">Minimum duration</p>
                        <p class="desc">Minimum duration is the shortest length of time a proposal can be open for voting.
                            You can extend the duration for each proposal but not shorten it.</p>
                        <div class="input">
                            <input type="number" placeholder="30">
                            <div class="input_tag">days</div>
                        </div>
                    </div>

                    <div class="label" v-show="step == 3">
                        <p class="title">Early execution</p>
                        <p class="desc">Allow proposal execution before the vote ends if the requirements are met and the
                            vote outcome cannot be changed by more voters participating.</p>
                        <div class="participate_options">
                            <div class="option">
                                <div class="option_text">
                                    <h6>Yes</h6>
                                </div>
                                <div class="option_dot">
                                    <div class="inner_dot"></div>
                                </div>
                            </div>

                            <div class="option">
                                <div class="option_text">
                                    <h6>No</h6>
                                </div>
                                <div class="option_dot">
                                    <div class="inner_dot"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--  -->

                    <div class="navigation">
                        <RouterLink to="/app" v-if="step == 1">
                            <button v-on:click="prevStep()">
                                <IconArrowLeft :color="'var(--white)'" /> Cancel
                            </button>
                        </RouterLink>
                        <button v-on:click="prevStep()" v-else>
                            <IconArrowLeft :color="'var(--white)'" /> Prev
                        </button>

                        <button v-on:click="nextStep()" v-if="step == 3">Deploy your DAO
                            <IconArrowRight :color="'var(--white)'" />
                        </button>
                        <button v-on:click="nextStep()" v-else>Next
                            <IconArrowRight :color="'var(--white)'" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconTrash from '../icons/IconTrash.vue'
import IconArrowLeft from '../icons/IconArrowLeft.vue'
import IconArrowRight from '../icons/IconArrowRight.vue'
</script>

<script>
export default {
    data() {
        return {
            step: 1,
            links: [
                {
                    name: '',
                    link: ''
                }
            ],
            addresses: [
                {
                    address: '',
                    tokens: ''
                }
            ]
        }
    },
    methods: {
        prevStep: function () {
            if (this.step > 1) {
                this.step--
            }
        },
        nextStep: function () {
            if (this.step < 3) {
                this.step++
            }
        },
        addLink: function () {
            this.links.push({ name: '', link: '' })
        },
        removeLink: function (index) {
            this.links.splice(index, 1)
        },
        addWallet: function () {
            this.addresses.push({ address: '', tokens: '' })
        },
        removeWallet: function (index) {
            this.addresses.splice(index, 1)
        }
    }
}
</script>

<style scoped>
section {
    background-color: var(--background-gray);
    padding-top: 120px;
    padding-bottom: 100px;
}

.create_head {
    background-color: var(--white);
    border-radius: 12px;
    border: rgb(228, 231, 235) 1px solid;
    padding: 50px;
}

.create_head_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
}

.create_head_title p:first-child {
    color: var(--background);
}

.create_head_title p:last-child {
    color: var(--gray-dark);
}

.progress {
    background-color: var(--gray-light);
    border-radius: 12px;
    padding: 4px;
    margin: 20px 0;
}

.progress_bar {
    height: 10px;
    background-color: var(--background);
    border-radius: 12px;
    transition: .1s;
}

.create_head_desc h1 {
    margin-top: 20px;
    font-size: 40px;
    font-weight: 600;
}


.create_head_desc p {
    font-size: 20px;
    color: var(--gray-dark);
    font-weight: 500;
}

.dao_form {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.form {
    width: 700px;
}

.label {
    margin-top: 40px;
}

.label .title {
    font-size: 16px;
    font-weight: 600;
}

.label .desc {
    font-size: 14px;
    font-weight: 500;
    color: var(--gray-dark);
    margin-top: 6px;
}

.label .input {
    border: 2px solid rgb(228, 231, 235);
    border-radius: 12px;
    background-color: var(--white);
    overflow: hidden;
    margin-top: 10px;
    display: flex;
    align-items: center;
}

.label .input_tag {
    background-color: var(--background-gray);
    padding: 10px 20px;
    min-width: 100px;
    height: 50px;
    display: flex;
    text-align: center;
    align-items: center;
    color: var(--gray-dark);
    font-weight: 500;
    font-size: 16px;
}

.label input {
    padding: 0 20px;
    font-size: 16px;
    font-weight: 500;
    min-height: 50px;
    border: none;
    outline: none;
    background: none;
    width: 100%;
}

.label textarea {
    padding: 12px 20px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    outline: none;
    background: none;
    width: 100%;
    resize: none;
}

.label .count {
    color: var(--gray-dark);
    font-size: 12px;
    font-weight: 500;
    margin-top: 10px;
}

.link_container {
    background-color: var(--white);
    border-radius: 12px;
    padding: 16px;
    margin-top: 16px;
}

.link_grid {
    display: grid;
    grid-template-columns: 300px 300px auto;
    gap: 20px;
    align-items: center;
}

.link_grid svg {
    margin-top: 10px;
    cursor: pointer;
}

.link_name {
    font-size: 18px;
    font-weight: 500;
}

.label button {
    background-color: var(--white);
    border-radius: 12px;
    height: 45px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    font-size: 16px;
    border: none;
    font-weight: 500;
    cursor: pointer;
    margin-top: 10px;
}

.navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 60px;
}

/* ////////////////// */

.participate_options .option {
    margin-top: 16px;
    border: 2px solid rgb(228, 231, 235);
    padding: 16px 20px;
    border-radius: 12px;
    display: grid;
    grid-template-columns: auto 20px;
    gap: 10px;
}

.option h6 {
    font-size: 16px;
    font-weight: 600;
}


.option p {
    font-size: 12px;
    font-weight: 500;
    margin-top: 6px;
}

.option_dot {
    width: 20px;
    height: 20px;
    border: 2px solid var(--gray);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.inner_dot {
    width: 12px;
    height: 12px;
    background-color: var(--gray-dark);
    border-radius: 10px;
}

.navigation button {
    background-color: var(--background);
    color: var(--white);
    border-radius: 12px;
    height: 45px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    border: none;
    font-weight: 500;
    cursor: pointer;
}

.address_container {
    background-color: var(--white);
    border-radius: 12px;
    padding: 16px;
    margin-top: 16px;
}

.address_grid {
    display: grid;
    grid-template-columns: 280px 200px 100px auto;
    gap: 20px;
    align-items: center;
}

.address_grid svg {
    margin-top: 10px;
    cursor: pointer;
}

.address_name {
    font-size: 18px;
    font-weight: 500;
}

.specify_container {
    background-color: var(--white);
    border-radius: 12px;
    padding: 16px;
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
}

.specify_container .participate_options .option {
    margin-top: 10px;
}
</style>