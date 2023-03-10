import React from "react";

export default function AvailableChats({ chats }) {
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        {false && (
          <div className="container-fluid">
            <div className="alert alert-warning">No chats to join :(</div>
          </div>
        )}

        {chats.map((chats) => {
          return (
            <div className="col-lg-3 col-md-6 mb-3" key={chats.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{chats.name}</h5>
                  <p className="card-text">{chats.description}</p>
                  <button
                    onClick={() => {}}
                    className="btn btn-outline-primary"
                  >
                    Join Chat
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
