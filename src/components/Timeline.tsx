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
type EntrySection = 'personal-project' | 'professional-experience';

interface CareerEntry {
  id: string;
  section: EntrySection;
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
    section: 'personal-project',
    date: 'Jan. 2025 - May 2025',
    title: 'Full Stack Developer',
    company: 'Online Ordering System - Self Employed | Hanoi, Vietnam',
    previewImage: 'https://img.youtube.com/vi/Wyt5HsjooLg/hqdefault.jpg',
    mediaType: 'embed',
    mediaSrc: 'https://www.youtube.com/embed/Wyt5HsjooLg?si=C-Yvvj0YtYaNL9Z3',
    description: [
      'Built and deployed a full-stack online ordering and restaurant management system for a family business in Vietnam.',
      'Drove a 40% rise in revenue and cut manual processes by 30% through automation and real-time system integration.',
      'Enabled QR code table ordering with real-time order flow from customers to the kitchen.',
      'Delivered an admin portal to manage roles, categories, menu items, orders, and revenue reporting.',
      'Applied MVC design pattern and a normalized MySQL schema for clean separation of concerns and reliable data integrity.',
      'Built using Java and MySQL on the backend, with HTML, CSS, JSP, and JavaScript for the frontend interface.',
      'Maintained clean code, documentation, and version control using Git.'
    ]
  }
];

function Timeline() {
  const [selectedEntry, setSelectedEntry] = useState<CareerEntry | null>(null);

  const personalProjects = useMemo(
    () => careerEntries.filter((entry) => entry.section === 'personal-project'),
    []
  );

  const professionalExperience = useMemo(
    () => careerEntries.filter((entry) => entry.section === 'professional-experience'),
    []
  );

  const modalMediaUrl = useMemo(() => {
    if (!selectedEntry) return '';
    return selectedEntry.mediaSrc;
  }, [selectedEntry]);

  return (
    <div id="history">
      <div className="items-container">
        <section className="timeline-section">
          <h1 className="timeline-section-title">Professional Experience</h1>
          <small className="timeline-hint">&lt;Click any entry to expand details&gt;</small>
          <VerticalTimeline>
            {professionalExperience.map((entry) => (
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
        </section>

        <section className="timeline-section">
          <h1 className="timeline-section-title">Personal Project</h1>
          <small className="timeline-hint">&lt;Click any entry to expand details&gt;</small>
          <VerticalTimeline>
            {personalProjects.map((entry) => (
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
        </section>
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
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
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