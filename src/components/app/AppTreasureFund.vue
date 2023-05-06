<template>
    <section>
        <div class="app_width">
            <div class="create_head">
                <div class="create_head_title">
                    <p>Add funds to DAO's treasure</p>
                    <p>Step {{ step }} of 1</p>
                </div>

                <div class="progress">
                    <div class="progress_bar" :style="`width: ${(step / 1) * 100}%`"></div>
                </div>

                <div class="create_head_desc" v-if="step == 1">
                    <h1>Add funds to treasure</h1>
                    <p>Name and define your DAO so new contributors know they've come to the right place. This information
                        is displayed on the DAO Explore page and can be changed with a vote. For ideas on DAO branding, read
                        our guide.</p>
                </div>
            </div>

            <div class="dao_form">
                <div class="form">
                    <div class="label" v-show="step == 1">
                        <p class="title">Summary</p>
                        <p class="desc">Maximum of 128 characters</p>
                        <div class="input">
                            <input v-model="treasure.summary" type="text" placeholder="Write about this fund...">
                        </div>
                        <p class="count">{{ treasure.summary.length }}/128</p>
                    </div>

                    <div class="label" v-show="step == 1">
                        <p class="title">Amount</p>
                        <p class="desc">Maximum of 128 characters</p>
                        <div class="input">
                            <input v-model="treasure.amount" type="text" placeholder="0.00">
                            <div class="input_tag">Æ</div>
                        </div>
                        <p class="count">{{ treasure.amount.length }}/128</p>
                    </div>

                    <!--  -->

                    <div class="navigation">
                        <RouterLink :to="`/app/daos/${$route.params.id}`" v-if="step == 1">
                            <button>
                                <IconArrowLeft :color="'var(--white)'" /> Cancel
                            </button>
                        </RouterLink>

                        <button v-on:click="fund()">Add fund
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
</script>

<script>
import { mapState } from 'vuex';
import { fundTreasure, daoState } from '../../scripts/aeternity'
export default {
    data() {
        return {
            treasure: {
                summary: '',
                amount: ''
            },
            step: 1,
        }
    },
    computed: {
        ...mapState(['aeSdk'])
    },
    methods: {
        fund: async function () {
            await fundTreasure(this.aeSdk, this.$route.params.id,
                this.treasure
            )
            this.$router.push(`/app/daos/${this.$route.params.id}/treasure`)
        },

        getDao: async function () {
            const result = await daoState(this.aeSdk, this.$route.params.id);
            this.dao = result.decodedResult
            
            let duration = Number(this.dao.governance.minDuration)
            this.treasure.endedOn = new Date().setSeconds(
                this.treasure.startedOn.getSeconds() + duration
            )
            
            this.loading = false
        }
    },
    mounted() {
        this.getDao()
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

.label input[type=text],
.label input[type=number] {
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