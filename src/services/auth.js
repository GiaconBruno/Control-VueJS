export default {
    auth() {
        let auth = null;
        try {
            auth = JSON.parse(localStorage.getItem("auth"));
            if (!auth.token || !auth.id || !auth.auth) {
                this.$router.push("/");
            }
            return auth
        } catch (e) {
            localStorage.clear();
            if (this.$router.app._route.path != '/') {
                this.$router.push("/");
            }
            return false
        }
    }
}