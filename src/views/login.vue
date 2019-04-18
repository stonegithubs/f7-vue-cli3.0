<template>
    <f7-page login-screen>
        <f7-login-screen-title>Login</f7-login-screen-title>
        <f7-list form>
            <f7-list-input
                    label="用户名"
                    name="username"
                    placeholder="用户名"
                    type="text"
            />
            <f7-list-input
                    label="密码"
                    name="password"
                    type="password"
                    placeholder="密码"
            />
        </f7-list>
        <f7-list>
            <f7-list-button href="/" title="登 录"></f7-list-button>
            <f7-block-footer>
                <p>Click Sign In to close Login Screen</p>
            </f7-block-footer>
        </f7-list>
    </f7-page>
</template>
<script>
    export default {}
</script>