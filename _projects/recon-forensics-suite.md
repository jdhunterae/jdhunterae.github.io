---
layout: project
title: "RECON Forensics Suite"
excerpt: "Managing development and support for MacOS Forensics Tools, working with C++, Python, and bash shell codebases."
technologies: ["C++", "Python", "Digital Forensics"]
image: /assets/images/projects/recon-forensics.jpg
---

## Project Overview

As a Software Specialist at SUMURI, I've been deeply involved in the ongoing development and maintenance of the RECON suite of MacOS Forensics Tools. This comprehensive toolkit is designed to help digital forensics investigators acquire, analyze, and report on evidence from Apple computers.

## Technical Details

The RECON suite consists of several integrated tools:

### RECON ITR (Imaging, Triage, and Reporting)

A comprehensive solution that allows investigators to:

- Create forensic images of Mac systems
- Perform live triage on running systems
- Generate detailed reports for case documentation

The codebase uses C++ with Qt for the front-end interface, with backend operations handled by a mix of C++ and Python scripts. For specialized system-level operations, we leverage bash shell scripts that interact directly with the MacOS environment.

### RECON Imager

A specialized tool focused solely on creating forensically sound images of Mac systems. Key features include:

- Support for various imaging formats (E01, RAW, DMG)
- Validation through multiple hash algorithms
- Detailed logging for chain of custody requirements

### RECON Lab

An analysis environment that provides:

- Built-in timeline analysis for Mac artifacts
- Specialized parsers for Apple-specific data structures
- Advanced searching capabilities across file content and metadata

## Technical Challenges and Solutions

One of the major challenges in developing forensic tools for MacOS is keeping pace with Apple's frequent updates and security changes. To address this, we've implemented:

1. A modular architecture that isolates OS-specific components
2. Comprehensive automated testing to quickly identify issues with new OS releases
3. Regular research into undocumented Apple systems to maintain forensic capabilities

## My Contributions

As the lead developer for this suite, my responsibilities include:

- Implementing new features based on user feedback and evolving forensic needs
- Troubleshooting complex bugs, particularly those related to MacOS specifics
- Modernizing legacy code components to improve maintainability
- Creating comprehensive documentation for both users and the development team
- Managing release cycles and version control

## Impact

The RECON suite is used by law enforcement agencies, corporate security teams, and forensic consultants worldwide. It has been instrumental in numerous investigations, providing crucial evidence that would otherwise be difficult to extract from Apple systems.

Our tools are particularly valued for their ability to reveal Apple-specific artifacts that generic forensic tools often miss, such as the extended attribute timestamps discussed in my recent conference presentation.
