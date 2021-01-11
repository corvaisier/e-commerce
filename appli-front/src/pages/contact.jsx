import {
    useHistory,
    Link
} from "react-router-dom";
import { useTranslation } from 'react-i18next';


function Contact() {
    const history = useHistory()
    const { t } = useTranslation('contact')

    return (
        <>
            <div>
                <h4> {t('Contact')} </h4>
                <button>
                    <Link onClick={() => history.goBack()} style={{ color: "black" }}> {t('back')} </Link>
                </button>
            </div>
        </>
    );
}

export default Contact;