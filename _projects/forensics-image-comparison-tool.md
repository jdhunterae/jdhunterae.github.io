---
layout: project
title: "MacOS Forensics Image Comparison Tool"
excerpt: "A specialized Python tool for verifying the integrity of forensic disk images by analyzing timestamps and hash discrepancies between original volumes and their copies."
technologies: ["Python", "SQLite", "hdiutil", "Digital Forensics"]
image: /assets/images/projects/image-comparison-tool.jpg
---

## Project Overview

As the sole developer of this specialized forensic analysis tool, I created a solution to address a critical question in digital forensics: How reliably does the `rsync` command preserve file metadata when creating disk images? The tool was designed to systematically analyze and quantify timestamp and hash discrepancies between original volumes and their forensic copies.

## Technical Details

This Python-based utility performs deep comparative analysis between two mounted disk images:

- **Dual-Volume Analysis**: Simultaneously catalogs and compares files across two mounted volumes
- **Comprehensive Metadata Extraction**: Leverages `stat -x` to extract complete file timestamp information
- **Multi-Hash Verification**: Generates and compares both MD5 and SHA1 hashes for each file
- **SQLite Database Storage**: Organizes findings in a structured database for efficient analysis
- **Difference Detection Engine**: Automatically identifies and categorizes discrepancies

The tool operates in two primary phases:

1. **Cataloging Phase**:
   - Recursively walks through both volume directory structures
   - Records complete metadata for each file path
   - Generates cryptographic hashes while maintaining forensic integrity
   - Stores all information in a SQLite database with proper indexing

2. **Analysis Phase**:
   - Performs path-by-path comparison between volumes
   - Identifies files with hash mismatches (content differences)
   - Detects timestamp inconsistencies across multiple time attributes
   - Generates statistical reports on discrepancy patterns

## Technical Challenges and Solutions

The project presented several unique challenges:

### Metadata Preservation Analysis

**Challenge**: Determine exactly which timestamp attributes were affected during the `rsync`-based imaging process, requiring precise comparison of multiple time attributes across potentially millions of files.

**Solution**: Developed a comprehensive SQLite schema to efficiently store and compare all timestamp attributes (`mtime`, `ctime`, `atime`, and extended attributes) while maintaining relationship integrity between the original and copied files.

### Performance Optimization

**Challenge**: Processing and comparing hash values for large volumes could potentially take days with a naive implementation.

**Solution**: Implemented multi-threaded processing for hash generation and designed an efficient database structure with appropriate indexing to optimize comparison operations, dramatically reducing processing time.

### Statistical Significance Evaluation

**Challenge**: Determining whether observed discrepancies were statistically significant enough to impact forensic validity.

**Solution**: Created analytical queries and reporting functions to quantify discrepancy patterns, calculating both absolute counts and percentages to provide context for the findings.

## My Contributions

As the solo developer on this project, my contributions included:

- Designing the complete architecture from concept to implementation
- Developing the Python codebase with appropriate error handling and logging
- Creating the SQLite database schema for efficient data storage and retrieval
- Implementing robust comparison algorithms to detect various types of discrepancies
- Testing the tool against multiple volume types and sizes to ensure reliability
- Documenting findings and their implications for forensic imaging procedures

## Impact

This project delivered significant value to the digital forensics community:

- **Empirical Evidence**: Provided concrete data on the forensic reliability of `rsync` as an imaging tool
- **Published Findings**: Findings were published in a technical article demonstrating the statistically insignificant number of modifications that occur during the imaging process
- **Best Practices Development**: Contributed to the refinement of forensic imaging procedures based on quantifiable evidence
- **Tool Reusability**: Created a reusable framework that could be applied to evaluate other imaging methods

The research conclusively demonstrated that while some timestamp modifications did occur during the `rsync` imaging process, these changes were minimal and followed predictable patterns, establishing confidence in this method for certain forensic applications where appropriate documentation of the process is maintained.
