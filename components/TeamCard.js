export default function TeamCard({ children }) {
    return (
        <div className="team-card">
            <div className="d-flex flex-column justify-content-center align-items-center m-1">
                {children} 
            </div> 
        </div> 
    ); 
}