<template>
    <section>
        <div class="app_width">
            <footer>
                <div class="terms_and_condition">
                    <a href="" target="_blank">
                        <p>Terms and Condition</p>
                    </a>
                    <a href="" target="_blank">
                        <p>Privacy Policy</p>
                    </a>
                </div>

                <div class="socials">
                    <a href="" target="_blank">
                        <IconDiscord />
                    </a>
                    <a href="" target="_blank">
                        <IconTwitter />
                    </a>
                    <a href="" target="_blank">
                        <IconTelegram />
                    </a>
                    <a href="" target="_blank">
                        <IconLinkedin />
                    </a>
                </div>
            </footer>
        </div>
    </section>
</template>

<style scoped>
section {
    padding: 10px 0;
    background-color: var(--white);
}

.terms_and_condition {
    display: flex;
    align-items: center;
    gap: 20px;
}

.terms_and_condition p {
    color: var(--gray-dark);
}

.socials {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>