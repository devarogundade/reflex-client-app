<template>
    <ProgressView v-if="loading" />
    <section v-else>
        <div class="app_width">
            <div class="create_head">
                <div class="create_head_title">
                    <p>Add new DAO members</p>
                    <p>Step {{ step }} of 1</p>
                </div>

                <div class="progress">
                    <div class="progress_bar" :style="`width: ${(step / 1) * 100}%`"></div>
                </div>

                <div class="create_head_desc" v-if="step == 1">
                    <h1>Add new members</h1>
                    <p>Name and define your DAO so new contributors know they've come to the right place. This information
                        is displayed on the DAO Explore page and can be changed with a vote. For ideas on DAO branding, read
                        our guide.</p>
                </div>
            </div>

            <div class="dao_form">
                <div class="form">
                    <div class="label" v-show="step == 1 && dao.membership.participation == 0">
                        <p class="title">Distribute tokens</p>
                        <p class="desc">Add the wallets you'd like to distribute tokens to. If you need help distributing
                            tokens</p>
                        <div class="address_container" v-if="tokenAllocations.length > 0">
                            <div class="address_grid">
                                <p class="address_name">Address</p>
                                <p class="address_name">Tokens</p>
                                <!-- <p class="address_name">Allocation</p> -->
                                <p></p>
                            </div>
                            <div class="address_grid" v-for="allocation, i in tokenAllocations" :key="i">
                                <div class="input">
                                    <input type="text" v-model="allocation.address" placeholder="ak...">
                                </div>
                                <div class="input">
                                    <input type="number" v-model="allocation.tokens" min="0" placeholder="0"
                                        style="text-align: center;">
                                </div>
                                <!-- <div class="input">
                                    <input type="text" disabled :value="((allocation.tokens / totalSupply) * 100) + '%'"
                                        style="background-color: var(--background-gray); text-align: center;">
                                </div> -->
                                <IconTrash v-on:click="removeAllocation(i)" />
                            </div>
                            <br> <br>
                            <div class="address_grid">
                                <p class="address_name">{{ tokenAllocations.length }} Addresses</p>
                                <p class="address_name">Total: {{ totalSupply }}</p>
                                <p class="address_name"></p>
                                <p></p>
                            </div>
                        </div>
                        <button v-if="tokenAllocations.length < 1" v-on:click="addAllocation()">Add wallet</button>
                    </div>

                    <div class="label" v-show="step == 1 && dao.membership.participation == 1">
                        <p class="title">Distribute powers</p>
                        <p class="desc">Add the wallets you'd like to distribute tokens to. If you need help distributing
                            tokens</p>
                        <div class="address_container" v-if="multisigMembers.length > 0">
                            <div class="address_grid">
                                <p class="address_name">Address</p>
                                <p class="address_name">Power</p>
                                <!-- <p class="address_name">Allocation</p> -->
                                <p></p>
                            </div>
                            <div class="address_grid" v-for="member, i in multisigMembers" :key="i">
                                <div class="input">
                                    <input type="text" v-model="member.address" placeholder="ak...">
                                </div>
                                <div class="input">
                                    <input type="number" v-model="member.powers" min="0" placeholder="0"
                                        style="text-align: center;">
                                </div>
                                <!-- <div class="input">
                                    <input type="text" disabled :value="((member.powers / totalPower) * 100) + '%'"
                                        style="background-color: var(--background-gray); text-align: center;">
                                </div> -->
                                <IconTrash v-on:click="removeMember(i)" />
                            </div>
                            <br> <br>
                            <div class="address_grid">
                                <p class="address_name">{{ multisigMembers.length }} Addresses</p>
                                <p class="address_name">Total Power: {{ totalPower }}</p>
                                <p class="address_name"></p>
                                <p></p>
                            </div>
                        </div>
                        <button v-if="tokenAllocations.length < 1" v-on:click="addMember()">Add member</button>
                    </div>

                    <!--  -->

                    <div class="navigation">
                        <RouterLink :to="`/app/daos/${$route.params.id}`" v-if="step == 1">
                            <button>
                                <IconArrowLeft :color="'var(--white)'" /> Cancel
                            </button>
                        </RouterLink>

                        <button v-if="dao.membership.participation == 0" v-on:click="createTokenMember()">Add member
                            <IconArrowRight :color="'var(--white)'" />
                        </button>

                        <button v-if="dao.membership.participation == 1" v-on:click="createWalletMember()">Add member
                            <IconArrowRight :color="'var(--white)'" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconArrowLeft from '../icons/IconArrowLeft.vue'
import IconArrowRight from '../icons/IconArrowRight.vue'
import IconTrash from '../icons/IconTrash.vue';
</script>

<script>
import { mapState } from 'vuex';
import { addMember, daoState } from '../../scripts/aeternity'
import ProgressView from './ProgressView.vue';
export default {
    data() {
        return {
            dao: null,
            tokenAllocations: [
                {
                    address: "",
                    tokens: 0
                }
            ],
            multisigMembers: [
                {
                    address: "",
                    powers: 0
                }
            ],
            totalSupply: 0,
            totalPower: 0,
            step: 1,
            loading: true
        };
    },
    computed: {
        ...mapState(["aeSdk"])
    },
    watch: {
        tokenAllocations: {
            handler: function (newTokenAllocations) {
                this.totalSupply = 0;
                for (let index = 0; index < newTokenAllocations.length; index++) {
                    const allocation = newTokenAllocations[index];
                    this.totalSupply += allocation.tokens;
                }
            },
            deep: true
        },
        multisigMembers: {
            handler: function (newMultisigMembers) {
                this.totalPower = 0;
                for (let index = 0; index < newMultisigMembers.length; index++) {
                    const member = newMultisigMembers[index];
                    this.totalPower += member.powers;
                }
            },
            deep: true
        }
    },
    methods: {
        addAllocation: function () {
            this.tokenAllocations.push({ address: "", tokens: 0 });
        },
        addMember: function () {
            this.multisigMembers.push({ address: "", powers: 0 });
        },
        removeAllocation: function (index) {
            this.tokenAllocations.splice(index, 1);
        },
        removeMember: function (index) {
            this.multisigMembers.splice(index, 1);
        },
        getDays: function (days) {
            return days * 24 * 3600;
        },
        createTokenMember: async function () {
            if (this.tokenAllocations.length == 0) return
            await addMember(this.aeSdk, this.$route.params.id, { address: this.tokenAllocations[0].address, value: this.tokenAllocations[0].tokens });
            this.$router.push(`/app/daos/${this.$route.params.id}/members`);
        },
        createWalletMember: async function () {
            if (this.multisigMembers.length == 0) return
            await addMember(this.aeSdk, this.$route.params.id, { address: this.multisigMembers[0].address, value: this.multisigMembers[0].powers });
            this.$router.push(`/app/daos/${this.$route.params.id}/members`);
        },
        getDao: async function () {
            const result = await daoState(this.aeSdk, this.$route.params.id);
            this.dao = result.decodedResult;
            this.loading = false;
        }
    },
    mounted() {
        this.getDao()
    },
    components: { ProgressView }
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

.label .title span {
    font-size: 14px;
    color: var(--gray-dark);
    margin-left: 4px;
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
    cursor: pointer;
}

.input_file {
    width: 80px;
    height: 80px;
    margin-top: 10px;
    border: 2px dashed rgb(228, 231, 235);
    border-radius: 12px;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.nft_input_file {
    width: 280px;
    height: 300px;
}

.input_file svg {
    width: 30px;
    height: 30px;
}

.input_file input {
    width: 100%;
    position: absolute;
    height: 100%;
    opacity: 0;
}

.label .input_tag {
    background-color: var(--background-gray);
    padding: 10px 20px;
    min-width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--black);
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

.participate_options .option_active {
    border: 2px solid var(--background);
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

.participate_options .option_active .option_dot {
    border: 2px solid var(--background);
}


.participate_options .option_active .inner_dot {
    background-color: var(--background-light);
}

.inner_dot {
    width: 12px;
    height: 12px;
    background-color: var(--gray);
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

.gasless_options {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
}

.address_grid {
    display: grid;
    grid-template-columns: 320px 260px auto;
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