# Public and private portfolio boundary

The public portfolio is designed to provide credible engineering evidence without publishing operational or personal information that is unnecessary for recruitment or academic review.

## Public portfolio

The following may be published after review:

- professional name, Vienna as the general location, work authorization, and professional contact channels;
- concise employment, education, project, and research descriptions;
- sanitized architecture diagrams that show system boundaries and data flows;
- technologies, responsibilities, constraints, limitations, and verified outcomes;
- repositories and documents that were intentionally prepared for public access;
- thesis titles, research questions, high-level methods, status, and public results.

## Recruitment or interview evidence

The following should be shared only when it is needed and may be shown during a technical interview instead of being published:

- extended implementation screenshots;
- detailed configuration excerpts with operational identifiers removed;
- unpublished thesis drafts or results that are approved for review;
- private repository access granted for a defined review period;
- demonstrations of recovery, monitoring, or security controls.

Anything sent with a job application must be treated as forwardable within the hiring organization. It must remain safe if it is stored in an applicant-tracking system or shared with a hiring manager and interview panel.

## Never publish

- public, private, overlay, or management IP addresses that identify the environment;
- internal hostnames, usernames, administrative URLs, or infrastructure inventories;
- passwords, API keys, tokens, private keys, certificates containing private material, backup codes, or recovery codes;
- raw logs that contain personal or operational identifiers;
- home address, private phone number, date of birth, student number, or identity documents;
- licensed data, participant data, supervisor correspondence, or material subject to an academic or contractual restriction;
- unresolved vulnerability details that could expose a real system;
- backup archives, environment files, database exports, or production configuration bundles.

## Public image policy

The public website does not publish a personal portrait. A professional photograph may be included in a job-specific CV when appropriate, but it is not part of the deployable website assets.

## Enforcement

Run `npm run verify:privacy` before deployment. The check scans the publishable source and asset trees for private address ranges, common credential signatures, sensitive file types, and explicitly forbidden personal assets. It supplements, but does not replace, manual review and the repository secret scanner.
