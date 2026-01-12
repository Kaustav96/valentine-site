import React from 'react';
import './Modal.css';

function Modal({ title, message, images = [], video, hasMedia, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-hearts">💕 💖 💗</div>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-message">{message}</p>

        {hasMedia && (
          <div className="modal-media">
            {video && (
              <div className="media-item">
                <video controls className="modal-video">
                  <source src={video} type="video/mp4" />
                  Your browser doesn't support video playback.
                </video>
              </div>
            )}

            {images && images.length > 0 && (
              <div className="modal-images">
                {images.map((img, index) => (
                  <div key={index} className="media-item">
                    <img
                      src={img}
                      alt={`Memory ${index + 1}`}
                      className="modal-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="image-placeholder">
                      <span>📸</span>
                      <p>Add your photo here:<br/>{img}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="modal-hearts">💗 💖 💕</div>
      </div>
    </div>
  );
}

export default Modal;
