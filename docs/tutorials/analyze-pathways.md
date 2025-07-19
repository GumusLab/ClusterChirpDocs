---
id: analyze-pathways
title: Analyzing Pathways
sidebar_position: 1
---

## Overview

This tutorial walks you through how to **cluster genes or samples** in your dataset and perform **pathway enrichment analysis** using ClusterChirp. By the end, you'll know how to:

- Cluster cells or genes based on expression
- Adjust the clustering sensitivity
- Run enrichment analysis on clustered genes
- Explore the resulting gene network

---

## Step 1: Cluster Genes or Samples

To get started, select the data axis you'd like to cluster: **rows (genes)** or **columns (samples)**.

1. **Click the "cluster" button** on the axis you want to cluster. It is on the left side of the sidebar.
2. Gray dividers should appear, outlining cluster boundaries.
![cluster gif](/img/clustershowing.gif)

> Refer to the [basic functions](/docs/basic-functions/#how-to-cluster-cells) if you would like a more detailed explanation of clustering

---

## Step 2: Adjust Cluster Sensitivity

Once the clusters appear:

- Use the **slider** next to the gray divider to control clustering tightness.
- Moving the slider changes how similar genes must be to belong in the same cluster.

![Cluster slider](/img/cluster_slider.png)

Try different slider values to see how cluster boundaries change.

![cluster slider gif](/img/cluster-slider.gif)

---

## Step 3: View and Analyze Dendrograms

After clustering, you’ll see **gray dendrogram blocks** appear:

- Click on any of these blocks to select a cluster.
- A small window or popup will appear showing cluster details.
![click-dendrogram](/img/click-dendrogram.gif)

---

## Step 4: Run Pathway Enrichment Analysis

Once you have a cluster selected:

1. Click the **"Analyze Pathways"** button in the popup.
2. The tool will run an enrichment analysis on the genes in that cluster.
3. You’ll get a list of pathways that are statistically enriched.

![analyze-pathways](/img/analyze-pathways-button.gif)

---

## Step 5: Explore the Gene Network

After the analysis:

- A **gene network graph** will appear showing relationships between the genes in the cluster.
- Nodes represent genes; edges represent known interactions.

![gene-network](/img/gene-network.gif)

Use the network to:

- Identify hub genes
- Explore co-regulated genes

---

## Summary

You’ve now:

- Clustered genes/samples
- Tuned clustering thresholds
- Performed enrichment analysis
- Explored gene-gene networks

Ready to try with your own data? Head back to the main page and upload your file to get started.

---

