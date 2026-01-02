---
id: examples
title: Examples
sidebar_position: 2
---

# Examples

Step-by-step walkthroughs showing how to analyze real proteomics datasets using clustering, natural language filtering, and pathway enrichment.

---

## Case Study 1: Natural Language-Assisted Analysis of Bladder Cancer Treatment Response Biomarkers

### Background

We analyzed plasma protein data from the GU16-257 bladder cancer immunotherapy trial (PMID: 37783966), with data kindly provided by the study investigators. Data were generated using the **Olink Immuno-Oncology panel** (92 proteins; 77 retained after QC filtering) and provided as log2-transformed Normalized Protein eXpression (NPX) values, measured at multiple treatment cycles (C1D1, C3D1, C8D1, and C12D1) across 196 patient samples.

### Step 1: Data Upload and Hierarchical Clustering

Following data upload, hierarchical clustering automatically organized the 77 proteins into distinct co-expression clusters. The dendrogram on the left margin showed clear separation between clusters, with Cluster 2 containing 42 genes displaying coordinated expression patterns. We customized the visualization by selecting metadata bars to display response status (responder/non-responder), timepoint, and race for each sample, with red coloration indicating higher protein expression and blue indicating lower expression.

<video width="100%" autoPlay loop muted playsInline>
  <source src={require('@site/static/img/case_study2_load_data_case_study2.mp4').default} type="video/mp4" />
</video>

### Step 2: Natural Language Filtering and Biomarker Exploration

To examine protein expression at a specific treatment timepoint, we used the natural language interface by typing **"select samples at C3D1 timepoint"** into the command box. The system filtered the heatmap in real time and displayed data only from cycle 3 day 1 samples. Next, we applied row-wise z-score normalization using the command **"zscore rows"** to standardize expression values across proteins, making it easier to compare relative expression patterns.

Finally, we typed **"sort by FASLG marker"** to order all samples by FASLG expression values in descending order. This revealed that patients who achieved complete clinical response (indicated by dark blue bars in the response metadata track) were enriched on the left side of the heatmap where FASLG expression was highest, aligning with published findings from this trial linking high FASLG expression to better treatment outcomes. This sequence demonstrates how conversational commands can replace complex manual filtering and analysis operations.

<video width="100%" autoPlay loop muted playsInline>
  <source src={require('@site/static/img/case_study2_nlp_filter_sort_FASLG.mp4').default} type="video/mp4" />
</video>

### Step 3: Pathway Enrichment Analysis

To better understand the biological functions of genes co-expressed with FASLG, we selected Cluster 2 and clicked on **"ANALYZE PATHWAY"**. This submitted the cluster gene list to the Enrichr API (PMID: 23586463, PMID: 27141961, PMID: 33780170), which performs enrichment analysis against its curated library collection. Results are displayed directly within ClusterChirp, allowing users to scroll through results from different pathway libraries without leaving the application.

From the **KEGG 2021 Human** pathway database, the top enriched pathway was **cytokine-cytokine receptor interaction** (p-value = 2.25e-10), indicating that proteins co-expressed with FASLG are predominantly involved in immune cell communication and signaling. Other enriched pathways included viral protein interaction with cytokines, TNF signaling, and chemokine signaling pathways, collectively suggesting coordinated immune and inflammatory responses.

<video width="100%" autoPlay loop muted playsInline>
  <source src={require('@site/static/img/case_study2_pathway_enrichment.mp4').default} type="video/mp4" />
</video>

### Summary

In this case study, the complete workflow was performed **without writing any code**, including hierarchical clustering and metadata visualization through natural language-guided filtering, interactive sorting, cluster selection, and pathway enrichment analysis. ClusterChirp enabled rapid hypothesis generation on treatment response biomarkers through intuitive visual exploration and on-the-fly biological interpretation.

---

## Case Study 2: Spatial Proteomics Analysis Reveals Distinct Cell Type Signatures in Tumor Microenvironment

### Background

To demonstrate the utility of ClusterChirp in high-dimensional spatial proteomics data exploration, we used publicly available multiplexed immunohistochemistry (mIHC) data from Buckup et al. [Nature Biomedical Engineering, 2025], comprising single-cell protein measurements from six cancer patients.

In this study, cells were classified into **eight types** (Cancer cells, CD8+ T cells, CD8- FOXP3- T cells, Regulatory T cells, B cells, Plasma cells, Macrophages, Stromal cells) based on exclusive lineage marker expression. To generate a representative subset, we selected ~200 cells per patient using proportional sampling with a separation score prioritizing cells most typical of their assigned type, yielding **1,202 cells with 32 features** (8 markers × 4 intensity metrics) across three tissue compartments.

The dataset contains measurements of eight protein markers (CD20, CD3, CD68, CD8, FOXP3, MZB1, PanCK, αSMA) quantified at four intensity levels (p1, p5, p9, mean) per marker.

### Step 1: Data Upload and Initial Clustering

After uploading the dataset, hierarchical clustering separated all eight cell types into distinct clusters, grouping related immune cell subtypes (CD8+ T cells, FOXP3+ T cells, CD8+ FOXP3+ T cells, and CD3+ T cells) together, while cancer cells (PanCK+), B cells (CD20+/MZB1+), macrophages (CD68+), and stromal cells (αSMA+) formed separate branches.

The heatmap generated by ClusterChirp displayed clear differential expression patterns, with high expression values in red and low expression in blue.

<video width="100%" autoPlay loop muted playsInline>
  <source src={require('@site/static/img/case_study1_file_load.mp4').default} type="video/mp4" />
</video>

### Step 2: Exploring Hierarchical Structure with Dendrogram Depth

We explored the heatmap using pan and zoom controls to navigate across 1,202 cells, then used the dendrogram depth slider to identify both major cell lineages and subtle subpopulations within the tumor microenvironment. Traversing across 11 hierarchical levels revealed progressively finer cell type distinctions at deeper cuts, helping verify that cluster assignments reflect true biological differences rather than technical artifacts.

<video width="100%" autoPlay loop muted playsInline>
  <source src={require('@site/static/img/case_study1_explore-heatmap.mp4').default} type="video/mp4" />
</video>

### Step 3: Network Visualization of Cell Communities

Hovering over cluster layer branches displays cluster statistics stratified by annotation categories. Clicking on a cluster opens an interactive dialog where users can visualize the genes/markers in that cluster as a network, analyze pathways, or send genes to Enrichr for further analysis.

The force-directed network view displays all 1,202 cells as nodes colored by cell type, with spatial positioning determined by marker expression similarity. This visualization clearly shows the separation of distinct cell populations into communities, with T cell subtypes clustering together while B cells, cancer cells, macrophages, plasma cells, and stromal cells form separate groups.

<video width="100%" autoPlay loop muted playsInline>
  <source src={require('@site/static/img/case_study1_network_view.mp4').default} type="video/mp4" />
</video>

### Step 4: Subsetting and Re-clustering Specific Populations

We explored specific populations by using the **crop functionality**, selecting B cells for detailed examination. The cropped view showed high CD20 expression across all cells in this cluster, confirming B cell identity.

<video width="100%" autoPlay loop muted playsInline>
  <source src={require('@site/static/img/case_study1_crop_bcells.mp4').default} type="video/mp4" />
</video>

### Summary

In this case study, having the options to adjust the dendrogram depth and analyze subsets of specific cell populations through co-expression network views made it easy to visually confirm that the separations we were seeing reflected actual biological differences in protein expression rather than technical artifacts or batch effects.

This interactive validation approach is especially useful for **spatial proteomics data**, where visual inspection of marker expression patterns is essential for confirming cell type assignments and identifying potential misclassifications.

---

## Key Takeaways

| Feature | Case Study 1 (Olink) | Case Study 2 (Spatial) |
|---------|---------------------|------------------------|
| **Data Type** | Plasma proteomics (Olink panel) | Spatial proteomics (mIHC) |
| **Samples** | 196 patient samples | 1,202 single cells |
| **Proteins/Markers** | 77 proteins | 32 features (8 markers × 4 metrics) |
| **Key Features Used** | Natural language filtering, sorting, pathway analysis | Dendrogram exploration, network view, crop function |
| **Biological Insight** | FASLG linked to treatment response | Cell type signatures in tumor microenvironment |
