import { FormattedMessage } from "react-intl"

export const OpportunitiesPage = () => {
    return <section className="container">
        <h1 className="title"><FormattedMessage id="opportunities.title" /></h1>
        <section className="w-full bg-slate-200 rounded-lg h-96" />
        <h2 className="title"><FormattedMessage id="opportunities.schedule" /></h2>
    </section>
}
