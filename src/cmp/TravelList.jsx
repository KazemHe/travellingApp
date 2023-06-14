import { TravelPreview } from "./TravelPreview";

export function TravelList({ travels, onRemoveTravel }) {
    return (
        <section className="travel-list simple-cards-grid">
            {travels.map(travel =>
                <TravelPreview key={travel._id} travel={travel} onRemoveTravel={onRemoveTravel} />
            )}
        </section>
    )
}
