import React, { useMemo, useState } from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

type MediaType = 'image' | 'video' | 'embed';

interface CareerEntry {
  id: string;
  date: string;
  title: string;
  company: string;
  previewImage: string;
  mediaType: MediaType;
  mediaSrc: string;
  demoUrl?: string;
  description: string[];
}

const careerEntries: CareerEntry[] = [
  {
    id: 'online-ordering-system',
    date: 'Jan. 2025 - May 2025',
    title: 'Full Stack Developer',
    company: 'Online Ordering System - Self Employed | Hanoi, Vietnam',
    previewImage: 'https://s.wordpress.com/mshots/v1/https://online-vender.vercel.app?w=1000',
    mediaType: 'image',
    mediaSrc: 'https://s.wordpress.com/mshots/v1/https://online-vender.vercel.app?w=1400',
    demoUrl: 'https://online-vender.vercel.app/',
    description: [
      'Built and deployed a full-stack online ordering and restaurant management system for a family business in Vietnam.',
      'Drove a 40% rise in revenue and cut manual processes by 30% through automation and real-time system integration.',
      'Enabled QR code table ordering with real-time order flow from customers to the kitchen.',
      'Delivered an admin portal to manage roles, categories, menu items, orders, and revenue reporting.',
      'Applied MVC design pattern and a normalized MySQL schema for clean separation of concerns and reliable data integrity.',
      'Implemented transaction-safe order creation using a two-phase (order → items → total) workflow.',
      'Added real-time updates on the restaurant dashboard using Server-Sent Events (SSE).',
      'Built using Java and MySQL on the backend, with HTML, CSS, JSP, and JavaScript for the frontend interface.',
      'Maintained clean code, documentation, and version control using Git.'
    ]
  },
  {
    id: 'sample-assist',
    date: 'September 2024 - June 2025',
    title: 'Software Engineering Intern',
    company: 'Sample Assist | Wollongong, NSW',
    previewImage: 'https://drive.google.com/thumbnail?id=1NdiwHnnfaISi4Oc2mip8dJNdF_1jowjW&sz=w1000',
    mediaType: 'embed',
    mediaSrc: 'https://drive.google.com/file/d/1NdiwHnnfaISi4Oc2mip8dJNdF_1jowjW/view?usp=sharing',
    description: [
      'Researched and fine-tuned the PaddleOCR model to automate Patient Identity Verification, reducing manual data entry time by 80% for 10,000+ records and enabling more patients to receive treatment each day.',
      'Designed and generated synthetic datasets using GAN model to cover the lack of real data.',
      'Developed APIs for seamless integration of AI models into the company’s applications.',
      'Engaged with stakeholders to define project goals and align team direction.',
      'Collaborated in a 5-member Agile (Sprint) team to work and deliver the final product.',
      'Conducted comprehensive data analytics and assessed AI model effectiveness through accuracy, precision, recall, and F1-score.',
      'Tech Stack: Python, FastAPI, OpenCV, Google ML Kit, GitHub, PostgreSQL.'
    ]
  }
];

const toDrivePreviewUrl = (url: string) => {
  if (!url.includes('drive.google.com')) return url;

  const match = url.match(/\/file\/d\/([^/]+)/);
  if (!match) return url;

  const fileId = match[1];
  return `https://drive.google.com/file/d/${fileId}/preview`;
};

function Timeline() {
  const [selectedEntry, setSelectedEntry] = useState<CareerEntry | null>(null);

  const modalMediaUrl = useMemo(() => {
    if (!selectedEntry) return '';
    if (selectedEntry.mediaType === 'embed') {
      return toDrivePreviewUrl(selectedEntry.mediaSrc);
    }
    return selectedEntry.mediaSrc;
  }, [selectedEntry]);

  return (
    <div id="history">
      <div className="items-container">
        <h1>
          Career History
          <small className="timeline-hint">&lt;Click any entry to expand details&gt;</small>
        </h1>
        <VerticalTimeline>
          {careerEntries.map((entry) => (
            <VerticalTimelineElement
              key={entry.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date={entry.date}
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <button
                className="timeline-preview-card"
                type="button"
                onClick={() => setSelectedEntry(entry)}
              >
                <img src={entry.previewImage} alt={`${entry.title} preview`} className="timeline-preview-image" />
                <div className="timeline-preview-content">
                  <h3 className="vertical-timeline-element-title">{entry.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{entry.company}</h4>
                </div>
              </button>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <Dialog
        open={Boolean(selectedEntry)}
        onClose={() => setSelectedEntry(null)}
        fullWidth
        maxWidth="md"
      >
        <DialogContent className="career-modal-content">
          <IconButton
            aria-label="close"
            onClick={() => setSelectedEntry(null)}
            className="career-modal-close"
          >
            <CloseIcon />
          </IconButton>

          {selectedEntry && (
            <div className="career-modal-body">
              <div className="career-modal-media-wrapper">
                {selectedEntry.mediaType === 'image' && (
                  <img
                    src={modalMediaUrl}
                    alt={`${selectedEntry.title} media`}
                    className="career-modal-media"
                  />
                )}

                {selectedEntry.mediaType === 'video' && (
                  <video controls className="career-modal-media">
                    <source src={modalMediaUrl} />
                    Your browser does not support video playback.
                  </video>
                )}

                {selectedEntry.mediaType === 'embed' && (
                  <iframe
                    src={modalMediaUrl}
                    title={`${selectedEntry.title} media`}
                    className="career-modal-media"
                    allow="autoplay"
                  />
                )}
              </div>

              <h3>{selectedEntry.title}</h3>
              <h4>{selectedEntry.company}</h4>

              <ul className="timeline-description-list">
                {selectedEntry.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {selectedEntry.demoUrl && (
                <div className="career-modal-actions">
                  <a
                    href={selectedEntry.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="timeline-demo-button"
                  >
                    Live Demo
                  </a>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Timeline;