import { wrapper } from "../redux/store";
import { MainLayout } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}

export default wrapper.withRedux(MyApp);
