<template>
    <div class="l-2col">
        <main class="l-main">
            <div class="l-main__contents-07">
                <div class="c-contact">
                    <div class="c-contact__header">
                        <div class="l-header__txt">
                            メールアドレス変更
                        </div>
                    </div>

                    <div
                        action=""
                        method="post"
                        class="c-contact__form"
                    >
                        <div class="c-contact__registerBox">
                            <div class="c-contact__register">
                                <span>{{ USER.email }}</span>
                            </div>
                        </div>

                        <div class="c-contact__txt">
                            <p>認証用のメールをお送りしましたのでご確認ください。</p>
                            <p class="asterisk fw-normal">
                                認証用URLを押すまではメールアドレスは変更されませんので必ずメールをご確認ください。
                            </p>
                        </div>

                        <div class="c-contact__submit mb-0">
                            <button
                                type="submit"
                                class="btn btn-sm btn-primary"
                                @click="changeEmailSuccess"
                            >
                                メールアドレスを変更
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <aside class="l-side hidden">
            <figure class="l-side__logo">
                <a
                    href="#"
                    class="l-side__logo-link"
                ><img
                    src="/dist/img/logo_blue.svg"
                    alt="OPNID"
                ></a>
            </figure>

            <nav class="c-sp-nav">
                <ul class="tabBar">
                    <li class="tabBar__item">
                        <a
                            href="#"
                            class="tabBar__link"
                        >
                            <svg
                                id="Assets_Icon_TabBar_ico_addressbook"
                                data-name="Assets / Icon / TabBar / ico_addressbook"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    id="isolation"
                                    width="24"
                                    height="24"
                                    fill="rgba(255,0,0,0)"
                                />
                                <path
                                    id="Fill_1"
                                    data-name="Fill 1"
                                    d="M16,20H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H16a2,2,0,0,1,2,2V18A2,2,0,0,1,16,20ZM4,14a1,1,0,1,0,1,1A1,1,0,0,0,4,14Zm3.7.3a.7.7,0,1,0,0,1.4h6.6a.7.7,0,1,0,0-1.4ZM4,9a1,1,0,1,0,1,1A1,1,0,0,0,4,9Zm3.7.3a.7.7,0,0,0,0,1.4h6.6a.7.7,0,1,0,0-1.4ZM4,4A1,1,0,1,0,5,5,1,1,0,0,0,4,4Zm3.7.3a.7.7,0,1,0,0,1.4h6.6a.7.7,0,1,0,0-1.4Z"
                                    transform="translate(3 2)"
                                    fill="#423d3d"
                                />
                            </svg>
                            <span class="tabBar__link-text">アドレス帳</span>
                        </a>
                    </li>
                    <li class="tabBar__item">
                        <a
                            href="#"
                            class="tabBar__link"
                        >
                            <svg
                                id="Assets_Icon_TabBar_ico_addressbook"
                                data-name="Assets / Icon / TabBar / ico_addressbook"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    id="isolation"
                                    width="24"
                                    height="24"
                                    fill="rgba(255,0,0,0)"
                                />
                                <path
                                    id="Combined_Shape"
                                    data-name="Combined Shape"
                                    d="M15.293,16.707l-4-4A1.008,1.008,0,0,1,11.2,12.6a7.007,7.007,0,1,1,1.4-1.4,1.008,1.008,0,0,1,.109.094l4,4a1,1,0,1,1-1.414,1.414ZM2,7A5,5,0,1,0,7,2,5.005,5.005,0,0,0,2,7Z"
                                    transform="translate(4 3)"
                                    fill="#423d3d"
                                />
                            </svg>
                            <span class="tabBar__link-text">検索</span>
                        </a>
                    </li>
                    <li class="tabBar__item">
                        <a
                            href="#"
                            class="tabBar__link"
                        >
                            <svg
                                id="Assets_Icon_TabBar_ico_addressbook"
                                data-name="Assets / Icon / TabBar / ico_addressbook"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    id="Icon_TabBar_ico_account"
                                    data-name="Icon / TabBar / ico_account"
                                >
                                    <rect
                                        id="isolation"
                                        width="24"
                                        height="24"
                                        fill="rgba(255,0,0,0)"
                                    />
                                    <path
                                        id="Combined_Shape"
                                        data-name="Combined Shape"
                                        d="M4.185,16C2.825,16,0,16,0,14c0-1.744,1.154-4,4.627-4h5.711C14.87,10,16,12.125,16,14c0,2-3.072,2-4.431,2ZM4,4A4,4,0,1,1,8,8,4,4,0,0,1,4,4Z"
                                        transform="translate(4 3)"
                                        fill="#423d3d"
                                    />
                                </g>
                            </svg>
                            <span class="tabBar__link-text">アカウント</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'RequestChangeMailSuccess',
    computed: {
        ...mapState('auth', {
            USER: state => state.USER,
        }),
    },
    methods: {
        changeEmailSuccess() {
            this.$store.dispatch('auth/changeEmailSuccess', false);
        }
    }
};
</script>
