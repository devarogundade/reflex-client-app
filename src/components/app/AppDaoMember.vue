<template>
    <section>
        <div class="app_width">
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

            <div class="dao_form">
                <div class="members form">
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
    </section>
</template>

<script setup>
</script>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            proposal: {
                title: '',
                summary: ''
            },
            step: 1,
        }
    },
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
    min-height: 100vh;
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

.dao_form {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.form {
    width: 700px;
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