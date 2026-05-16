---
id: chat-with-ai
title: Chat With AI
sidebar_position: 2
---


# Chat With AI

The **Chat With AI** box lets you interactively reorder and filter the heatmap using natural language commands, beyond what the usual buttons can do.

## What Can You Do?

Instead of manually adjusting settings, you can ask the AI to:

- Select specific genes, e.g., "show the top 10 genes with the lowest variance"
- Apply complex filters to the heatmap
- Reorder rows or columns based on criteria you specify


---

## How to Use

1. Locate the **Chat With AI** box in the interface.
2. Type your command in natural language describing how you want to modify the heatmap.
3. Press Enter or click submit.
4. The heatmap will update based on your request.


---

## Types of Commands
### Filtering & Selection
Filter your heatmap by metadata or variance. For example, "Select the top 50 most variant genes", "Show only male patients", "Select female responders", or "Remove non-responders". You can also combine multiple conditions in a single command, such as "Show male patients with complete response". To reset all filters, say "Show all samples" or "Clear filters".
### Sorting
Sort rows or columns by different criteria. For example, "Sort rows by variance", "Sort columns by sum", "Sort alphabetically", or "Sort by Sex" to group samples by a metadata category. You can also sort samples by a specific gene's expression, such as "Sort samples by BRCA1 expression".
### Clustering
An alternative to clustering through the sidebar. For example, "Cluster rows", "Cluster columns", or "Cluster both". The heatmap will be re-clustered and automatically switch to cluster order.
### Z-Score Normalization
Applies z-score normalization across rows or columns to standardize the data. For example, "Normalize rows" or "Z-score columns".
### Distance and Linkage
Changes the distance metric and linkage method used for hierarchical clustering. For example, "Use cosine distance", "Use ward linkage", or combine both in one command: "Cluster using Pearson correlation and average linkage". Supported distance metrics are Euclidean, Cosine, Correlation (Pearson), and Manhattan. Supported linkage methods are Average, Complete, Single, and Ward.
### Search
An alternative to searching through the search bar. For example, "Search for BRCA1", "Find gene TP53", or "Search for CD8A".
### Pathway & Functional Filtering
Filter genes by biological pathways or transcription factor targets. For example, "Show STAT3 targets", "Show genes from KEGG apoptosis pathway", or "Show immune genes". You can also browse available pathways by category, such as "List cancer pathways" or "List immune pathways". Supported pathway databases include KEGG, Reactome, WikiPathway, and BioCarta.
### Visualization
Another way to change the heatmap appearance. You can adjust the opacity more specifically, for example "Make it darker", "Make it lighter", or set a precise value like "Set opacity to 0.8".



**Help function and distance metric changing:**
![Chat with AI gif](\img\chat-with-ai-and-distance-metric.webp)

**Finding a gene:**
![Chat with AI webp](\img\cluster-chat-find-gene.webp)

---

## Examples of Commands

- "Show the top 10 genes with the lowest variance"
- "Set opacity to 2"
- "Show only females"
- "Sort by survival"


---

## Tips

- Be specific with your requests to get better results.
- If the output is unexpected, rephrase your command or try simpler requests.


---

Happy exploring with AI-powered heatmap control!