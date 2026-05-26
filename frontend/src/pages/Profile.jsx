import "../styles/profile.css";

export default function Profile({ navigate, userData }) {
    const user = userData || {};
    const displayName = user.fullName || "Marry Doe";
    const displayEmail = user.email || "Marry@Gmail.Com";

    return (
        <div className="phone-frame profile-frame">
            {/* Header */}
            <div className="profile-header">
                <span className="profile-header-title">Account Settings</span>
            </div>

            {/* User info row */}
            <div className="profile-user-row">
                <div className="avatar-wrapper">
                    <div className="avatar">
                        <img
                            src="https://i.pravatar.cc/80?img=47"
                            alt="Profile"
                            className="avatar-img"
                        />
                    </div>
                    <div className="avatar-edit-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className="user-info">
                    <span className="user-name">{displayName}</span>
                    <span className="user-email">{displayEmail}</span>
                </div>
            </div>

            {/* Divider */}
            <div className="divider" />

            {/* Bio */}
            <div className="profile-bio">
                <p>
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                    Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
                    Erat, Sed Diam
                </p>
            </div>

            {/* Divider */}
            <div className="divider" />

            <div className="profile-empty" />

            {/* Back button */}
            <div className="profile-footer">
                <span className="link-back" onClick={() => navigate("home")}>
                    ← Back to Home
                </span>
            </div>
        </div>
    );
}