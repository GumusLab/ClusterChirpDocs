---
id: FAQ
title: FAQ
sidebar_position: 2
---

## General

**Do I need an account to use ClusterChirp?**
No. ClusterChirp is freely accessible via modern web browsers without registration.

**Is my data secure?**
Yes. ClusterChirp is hosted on Mount Sinai's HIPAA-compliant Minerva server. Uploaded datasets are stored temporarily with unique session IDs and automatically deleted on session expiration.

**Can I run ClusterChirp locally?**
Yes. ClusterChirp is distributed as a Docker container for local deployment.

## Data

**What data formats are supported?**
ClusterChirp supports standard tab-delimited text formats (TSV) commonly used in omics workflows. You can export clustered data as TSV files and publication-ready figures as PDF.

**What is the maximum dataset size ClusterChirp can handle?**
ClusterChirp supports up to ~10 million cells with smooth performance. For clustering, up to ~20,000 rows is recommended with 16GB RAM.

**How does ClusterChirp handle missing values?**
ClusterChirp automatically detects missing values and offers multiple imputation strategies: mean/median replacement, KNN, iterative imputation, matrix factorization, and random forest. An auto-select option recommends a method based on your data.

## Clustering & Analysis

**What clustering options are available?**
ClusterChirp supports hierarchical clustering with multiple distance metrics (Euclidean, Manhattan, Pearson, Cosine) and linkage methods (complete, average, single). Users can adjust clustering depth using interactive sliders to explore dendrogram structures at different levels.

**What pathway databases are integrated for gene filtering?**
ClusterChirp integrates KEGG, Reactome, WikiPathways, and MSigDB for pathway-based gene filtering and functional enrichment analysis via the Enrichr API.

**How does the correlation network work?**
For a selected cluster, ClusterChirp calculates pairwise similarity between cluster members and visualizes them as interactive correlation networks in 2D or 3D. Nodes represent features and edges denote statistically significant correlations. Optional Leiden clustering identifies community structure within the network.

## Natural Language Interface

**What operations can I perform using the natural language interface?**
The chatbot supports filtering, clustering, sorting, normalization, and pathway-based queries. Examples include:
- Filtering: "show only male samples", "select responders", "filter by timepoint C3D1"
- Clustering: "cluster rows", "cluster columns", "cluster rows and columns"
- Sorting: "sort by FASLG marker", "sort rows by variance", "sort columns alphabetically"
- Normalization: "zscore rows", "zscore columns"
- Pathway filtering: "show immune genes", "filter by pathway KEGG_MAPK_signaling"

**How do I apply z-score normalization?**
Type "zscore rows" or "zscore columns" in the chat box. This standardizes expression values to have zero mean and unit variance, making it easier to compare relative expression patterns across features or samples.

**How do I filter the heatmap by metadata?**
Use natural language commands like "show only female samples", "select responders", or "filter by timepoint C3D1". You can also combine multiple conditions such as "show female responders". Applied filters appear as removable tags in the control panel.

**How do I set clustering distance metric and linkage method?**
Use commands like "cluster rows using Pearson correlation and average linkage" or "cluster columns with Euclidean distance and complete linkage". Supported distance metrics are Pearson, Euclidean, Manhattan, and Cosine. Supported linkage methods are average, complete, and single.

**How do I filter genes by biological pathways?**
Use exploratory queries like "list immune pathways" or "show cancer pathways" to discover available options. Then use targeted queries like "show immune genes" or "filter by pathway KEGG_MAPK_signaling" to subset and re-cluster the dataset.

**Chat with AI won't take some of my commands. What should I do?**
Try rephrasing your commands in different ways. You can also use the guided command suggestions organized by functional categories. If the LLM API is unavailable, a rule-based fallback parser ensures basic functionality.

## Support

**I found a bug with ClusterChirp. Where do I report it?**
Visit the "contact" page at the top right of the website. Contact Gumus Lab with any questions!
