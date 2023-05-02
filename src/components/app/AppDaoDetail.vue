<template>
    <section>
        <div class="app_width">
            <div class="detail_container">
                <div class="detail_head">
                    <div class="detail_head_text">
                        <h1>YatsuDAO_Ryufukuji</h1>
                        <p class="domain">yatsudao-rfj.dao.eth</p>
                        <div class="link">
                            <p>{{ `https://reflex-protocol.netlify.app/app/daos/${$route.params.id}` }}</p>
                            <IconCopy :color="'var(--background)'" />
                        </div>
                        <p class="detail_head_text_desc">
                            This is a DAO to discuss and implement management practices to turn abandoned paddy fields in
                            Ryufukuji, Inzai, Chiba, into valuable and attractive green-infrastructure.
                        </p>
                    </div>
                    <div class="detail_head_image">
                        <img src="https://ipfs.eth.aragon.network/ipfs/QmS4TURPPg75etrhFS9z6S6mo2ZzsEq5BmRL463dGbUt9J"
                            alt="">
                    </div>
                </div>
                <div class="detail_tail">
                    <div class="detail_tail_options">
                        <div class="option">
                            <IconClock :color="'var(--background)'" />
                            <p>April 2023</p>
                        </div>
                        <div class="option">
                            <IconBoxTick :color="'var(--background)'" />
                            <p>aeternity</p>
                        </div>
                        <div class="option">
                            <IconPeople :color="'var(--background)'" />
                            <p>Token-Based</p>
                        </div>
                    </div>

                    <div class="favourite">
                        <IconStar />
                    </div>
                </div>
            </div>

            <div class="dao_container">
                <div class="proposal_container">
                    <div class="proposal_created">
                        <div class="proposal_created_text">
                            <IconBox />
                            <h3>3 <span>Proposals created</span></h3>
                        </div>
                        <RouterLink to="/app/daos/1/governance/new-proposal">
                            <button>New proposal</button>
                        </RouterLink>
                    </div>

                    <div class="proposals">
                        <div class="proposal" v-for="i in 2" :key="i">
                            <div class="proposal_info">
                                <span>Active</span>
                                <div class="proposal_info_time">
                                    <IconClock />
                                    <p>7 days left</p>
                                </div>
                            </div>
                            <div class="proposal_head">
                                <h3>投票時間の最短値の変更</h3>
                                <p class="desc">7日から1時間に変更したい</p>
                                <p class="published">Published by <a href="">0x207...3488</a></p>
                            </div>
                            <div class="proposal_vote">
                                <div class="wining">
                                    <p>Wining option</p>
                                    <p>20 YT</p>
                                </div>
                                <div class="progress">
                                    <div class="progress_bar"></div>
                                </div>
                                <div class="status">
                                    <p>Yes</p>
                                    <p>100%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="proposal2_container">
                    <div class="token_container">
                        <img src="/images/token-transfer.svg" alt="">
                        <h3>Initiate a token transfer</h3>
                        <p>Ready to distribute tokens or send funds? Initiate a token transfer here. For ideas on how to
                            distribute your community's token, read our guide on token distribution.</p>
                        <button
                            v-on:click="createOrChangeAllowance(aeSdk, 'ct_2pT2mj7s1NnUkWoY4trcisk2MWnq8zj3qsUatemUwXKkZ42qVe', 'ak_2iBPH7HUz3cSDVEUWiHg76MZJ6tZooVNBmmxcgVK6VV8KAE688', 10000)">Initiate
                            transfer</button>
                    </div>

                    <div class="member_container">
                        <div class="members_info">
                            <IconPeople />
                            <button>Add members</button>
                        </div>

                        <div class="members_count">
                            <h3>1 Members</h3>
                            <p>Token-Based</p>
                        </div>
                    </div>

                    <div class="members">
                        <div class="member">
                            <div class="member_info">
                                <img src="" alt="">
                                <p>Ox207...3488</p>
                            </div>
                            <a href="">
                                <div class="member_link">
                                    <p>20 YT (100%)</p>
                                    <IconOut />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconCopy from '../icons/IconCopy.vue';
import IconStar from '../icons/IconStar.vue'
import IconClock from '../icons/IconClock.vue'
import IconBox from '../icons/IconBox.vue'
import IconBoxTick from '../icons/IconBoxTick.vue'
import IconPeople from '../icons/IconPeople.vue';
import IconOut from '../icons/IconOut.vue'
import {
    createOrChangeAllowance,
} from '../../scripts/aeternity'
</script>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['aeSdk'])
    },
}
</script>

<style scoped>
section {
    background-color: var(--background-gray);
    padding-top: 120px;
    padding-bottom: 100px;
}

.detail_container {
    background-color: var(--white);
    padding: 50px;
    border-radius: 12px;
    border: rgb(228, 231, 235) 1px solid;
}

.detail_head {
    gap: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.detail_head_text h1 {
    font-size: 40px;
    font-weight: 600;
}

.detail_head_text .domain {
    font-size: 14px;
    margin-top: 4px;
    font-weight: 500;
}

.detail_head_text .link {
    margin-top: 6px;
    display: flex;
    align-items: center;
    gap: 6px;
}

.link {
    color: var(--background);
    font-size: 14px;
    font-weight: 500;
}

.detail_head_text_desc {
    font-size: 16px;
    color: var(--gray-dark);
    margin-top: 10px;
    font-weight: 500;
}

.detail_head_image img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    object-fit: cover;
}

.detail_tail {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.detail_tail_options {
    display: flex;
    align-items: center;
    gap: 16px;
}

.detail_tail_options .option {
    display: flex;
    align-items: center;
    gap: 8px;
}

.favourite {
    background-color: var(--background-gray);
    padding: 10px 12px;
    border-radius: 12px;
}

.detail_tail_options .option p {
    font-size: 12px;
    font-weight: 500;
}


.detail_tail_options .option svg {
    width: 20px;
    height: 20px;
}

.dao_container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 30px;
}

.proposal_container {
    width: 800px;
}

.proposal_created {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: var(--white);
    border-radius: 12px;
    border: rgb(228, 231, 235) 1px solid;
}

.proposal {
    padding: 20px;
    background-color: var(--white);
    border-radius: 12px;
    border: rgb(228, 231, 235) 1px solid;
    margin-top: 16px;
}

.proposal_created_text {
    display: flex;
    align-items: center;
    gap: 16px;
}

.proposal_created_text svg {
    width: 30px;
    height: 30px;
}

.proposal_created_text h3 {
    font-size: 30px;
    font-weight: 600;
}

.proposal_created_text span {
    font-size: 16px;
    font-weight: 500;
    color: var(--gray-dark);
}

.proposal_created button {
    background-color: var(--background);
    color: var(--white);
    border-radius: 12px;
    height: 45px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    font-size: 16px;
    border: none;
    font-weight: 500;
    cursor: pointer;
}

.proposal_info {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.proposal_info span {
    padding: 3px 8px;
    background-color: var(--blue);
    color: var(--white);
    font-size: 12px;
    border-radius: 12px;
}

.proposal_info_time {
    display: flex;
    align-items: center;
    gap: 6px;
}

.proposal_info_time svg {
    width: 18px;
    height: 18px;
}

.proposal_info_time p {
    font-size: 12px;
    font-weight: 500;
}

.proposal_head {
    margin-top: 16px;
}

.proposal_head h3 {
    font-size: 24px;
    font-weight: 600;
}

.proposal_head .desc {
    margin-top: 6px;
    font-size: 16px;
    color: var(--gray-dark);
}

.proposal_head .published {
    margin-top: 10px;
    font-size: 14px;
    color: var(--gray-dark);
    font-weight: 500;
}

.proposal_head .published a {
    color: var(--background);
}

.proposal_vote {
    margin-top: 20px;
    background-color: var(--background-gray);
    border-radius: 10px;
    padding: 16px;
}

.wining {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.wining p:first-child {
    font-size: 16px;
    font-weight: 600;
}

.wining p:last-child {
    font-size: 16px;
    font-weight: 600;
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
    width: 200px;
    border-radius: 12px;
}

.status {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.status p:first-child {
    font-size: 16px;
    font-weight: 600;
    color: var(--background);
}

.status p:last-child {
    font-size: 16px;
    font-weight: 600;
    color: var(--background);
}

.proposal2_container {
    width: 440px;
}

.token_container {
    padding: 50px;
    background-color: var(--white);
    border-radius: 12px;
    border: rgb(228, 231, 235) 1px solid;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.token_container img {
    height: 200px;
    transform: scale(1.5, 1.5);
}

.token_container h3 {
    font-size: 24px;
    margin-top: 50px;
}

.token_container p {
    font-size: 16px;
    color: var(--gray-dark);
    margin-top: 10px;
}

.token_container button {
    background-color: var(--background);
    color: var(--white);
    border-radius: 12px;
    height: 45px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    font-size: 16px;
    border: none;
    font-weight: 500;
    cursor: pointer;
    margin-top: 30px;
}

.member_container {
    padding: 20px;
    background-color: var(--white);
    border-radius: 12px;
    border: rgb(228, 231, 235) 1px solid;
    width: 440px;
    width: 100%;
    margin-top: 16px;
}

.members_info {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.members_count {
    margin-top: 40px;
}

.members_count h3 {
    font-size: 30px;
    font-weight: 600;
}

.members_count p {
    font-size: 16px;
    font-weight: 500;
    color: var(--gray-dark);
}

.member_container button {
    background-color: var(--background);
    color: var(--white);
    border-radius: 12px;
    height: 45px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    font-size: 16px;
    border: none;
    font-weight: 500;
    cursor: pointer;
}

.member {
    padding: 20px;
    background-color: var(--white);
    border-radius: 12px;
    border: rgb(228, 231, 235) 1px solid;
    width: 440px;
    width: 100%;
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.member_info {
    display: flex;
    align-items: center;
    gap: 16px;
}

.member_info img {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    object-fit: cover;
}

.member_info p {
    font-size: 16px;
    font-weight: 600;
}

.member_link {
    display: flex;
    align-items: center;
    gap: 4px;
}

.member_link p {
    font-size: 12px;
    font-weight: 500;
    color: var(--gray-dark);
}

.member_link svg {
    width: 14px;
    height: 14px;
}
</style>