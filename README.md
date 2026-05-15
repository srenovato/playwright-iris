# Iris Sciences - QA Audit & Automation

This repository contains the automated regression suite and audit investigation performed for the Iris Sciences technical assessment.

The project combines exploratory testing, regression automation, Role Base Access Control (RBAC) validation, API-assisted workflows, and legacy system investigation.

---

# Tech Stack

- Playwright
- TypeScript
- Node.js

---

# Automated Test Coverage

The automated suite covers critical workflows and permission-sensitive scenarios, including:

## Authentication
- Login as Test Subject
- Login as Junior Test Coordinator
- Login as Senior Test Coordinator
- Login as Director of Enrichment

## RBAC / Permissions
- Unauthorized access to Approval controls
- Unauthorized access to Export controls
- Session approval workflow
- Session rejection workflow

## API-Assisted Workflows
- Dynamic session creation through authenticated API requests
- Hybrid API + UI validation flow

---

## Environment Variables

This project uses environment variables to manage sensitive information securely.
The `.env` file is intentionally excluded from the repository through `.gitignore`, as it contains credentials and private data that shouldn't be publicly shared.

To execute the test locally, create a `.env` file in the root of the project using the following structure:


CASE_TOKEN=<case-token>

TEST_SUBJECT_PASSWORD=<test-subject-password>
JUNIOR_PASSWORD=<junior-password>
SENIOR_PASSWORD=<senior-password>
DIRECTOR_PASSWORD=<director-password>

After creating the file and providing valid credentials, the framework should be ready to run successfully. 


---
 

## Installation

>Clone the repository:
```
git clone <repository-url>
```
> Install dependencies:

npm install

> Install Playwright browsers:

npx playwright install

---


## Running tests


> Run all tests:

npx playwright test

> Run a specific spec:

npx playwright test tests/permissions.spec.ts

> Open Playwright report:

npx playwright show-report

---

## Test Report

The regression suite intentionally includes failing scenarios corresponding to confirmed product defects identified during the audit process.

These failures are expected and documented in AUDIT.md.

---

## Audit Deliverables##

Included in this repository:

- Automated regression suite
- AUDIT.md audit memo
- QE Index investigation findings
- Bug triage and severity analysis
- Disbursement notice artifact

---

## Notes

During the investigation, legacy archival systems and operator console artifacts were analyzed to validate the Quarterly Enrichment Index methodology and historical corrections associated with chamber C-Δ-7.

---





