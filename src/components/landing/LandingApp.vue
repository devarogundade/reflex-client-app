<template>
    <section>
        <div class="app_width">
            <div class="app_container">
                <div class="app_timeline">
                    <div class="app_timeline_button">
                        <IconFlash />
                    </div>
                    <div class="app_timeline_stroke"></div>
                </div>

                <div class="app_contents">
                    <div class="app_text_content">
                        <h1>Reflex App <span>Beta</span></h1>
                        <p class="app_text_content_desc">DAO creation and management platform with no coding required</p>
                        <div class="app_text_actions">
                            <RouterLink to="/app">
                                <div class="app_text_action">
                                    <p>Learn more</p>
                                </div>
                            </RouterLink>
                        </div>
                    </div>

                    <div class="app_no_code_content">
                        <p><span>No code setup.</span> Mint and distribute tokens, authorize wallets for voting, and set
                            governance parameters without writing a line of code.</p>
                        <img src="/images/nocode.png" alt="nocode">
                    </div>

                    <div class="app_grid">
                        <div class="app_governance_content">
                            <p><span>Governance made easy.</span> Making proposals and casting votes is easy, so members can
                                participate with no barriers to entry.</p>
                            <img src="/images/governance.png" alt="governance">
                        </div>

                        <div class="app_dao_content">
                            <p><span>One home for your DAO.</span> Members can onboard to your DAO quickly because they'll
                                find
                                everything they need in your DAO Dashboard.</p>
                            <img src="/images/dao.png" alt="governance">
                        </div>
                    </div>
                    <div class="app_custom_ui_content">
                        <IconBoxTick :color="'var(--background)'" />
                        <P><span>Aragon ODS.</span> Design a user-friendly, custom UI for your Aragon App with our Open
                            Design
                            System.</P>
                        <div class="soon">Coming soon</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconBoxTick from '../icons/IconBoxTick.vue';
</script>

<style scoped>
.app_container {
    display: grid;
    grid-template-columns: 60px auto;
    gap: 30px;
}

.app_contents {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.app_timeline {
    position: relative;
}

.app_timeline_button {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
}

.app_timeline_button svg {
    width: 36px;
    height: 36px;
}

.app_timeline_stroke {
    width: 3px;
    height: calc(100% - 60px);
    background-color: var(--background-light);
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translate(-50%, 0);
}

.app_text_content h1 {
    font-size: 30px;
    font-weight: 400;
    line-height: 90%;
    color: var(--white);
    font-family: 'Syne', sans-serif;
    margin-top: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.app_text_content h1 span {
    font-size: 14px;
    background-color: var(--blue);
    border-radius: 12px;
    padding: 3px 8px;
}

.app_text_content_desc {
    width: 1000px;
    max-width: 100%;
    margin-top: 20px;
    font-size: 40px;
    color: var(--white);
    line-height: 55px;
}

.app_text_actions {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
}

.app_text_action {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    height: 48px;
    padding: 0 20px;
    border-radius: 12px;
}

.app_text_actions a:first-child .app_text_action {
    border: 2px var(--white) solid;
}

.app_text_actions a:first-child .app_text_action p {
    font-size: 16px;
    font-weight: 500;
    color: var(--white);
}

.app_no_code_content {
    border: 1px var(--background-light) solid;
    border-radius: 12px;
    padding: 40px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    background-color: #f04e7c;
}

.app_no_code_content p {
    width: 500px;
    font-size: 30px;
    color: #ffd9d9;
    opacity: 0.8;
    max-width: 100%;
}

.app_no_code_content img {
    width: 550px;
}

.app_no_code_content p span {
    color: var(--white);
}

.app_grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.app_governance_content {
    border: 1px var(--background-light) solid;
    border-radius: 12px;
    padding: 40px;
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    background-color: #f04e7c;
}

.app_governance_content p {
    width: 500px;
    font-size: 30px;
    color: #ffd9d9;
    opacity: 0.8;
    max-width: 100%;
}

.app_governance_content img {
    width: 100%;
}

.app_governance_content p span {
    color: var(--white);
}

.app_dao_content {
    border: 1px var(--background-light) solid;
    border-radius: 12px;
    padding: 40px;
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    background-color: #f04e7c;
}

.app_dao_content p {
    width: 500px;
    font-size: 30px;
    color: #ffd9d9;
    opacity: 0.8;
    max-width: 100%;
}

.app_dao_content img {
    width: 100%;
}

.app_dao_content p span {
    color: var(--white);
}

.app_custom_ui_content {
    border: 1px var(--background-light) solid;
    border-radius: 12px;
    padding: 100px 40px;
    width: 100%;
    gap: 30px;
    background-color: #f04e7c;
    margin-top: 30px;
}

.app_custom_ui_content p {
    margin-top: 20px;
    font-size: 30px;
    color: var(--white);
    width: 500px;
    max-width: 100%;
}

.app_custom_ui_content .soon {
    font-size: 12px;
    margin-top: 20px;
    color: var(--white);
    background-color: var(--blue);
    padding: 3px 8px;
    border-radius: 12px;
    width: fit-content;
}

.app_custom_ui_content svg {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
}
</style>