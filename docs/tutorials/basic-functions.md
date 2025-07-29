---
id: basic-functions
title: Basic Functions
hide_title: true
sidebar_position: 1
---


# Basic Functions

## Uploading Data
Data must be uploaded following a strict set of rules:
- Different column and row categories cannot have the same name
- Column and row categories must have a colon, and must format each category as follows:
  - [Category name] + [any number of spaces]: [any number of spaces] + [datapoint]
  - Column and row categories cannot have any more than one colon
- Uploads must have more than one row and one column

---

## Reordering Rows and Columns
To order rows and columns, click on the blue buttons on the left side of the heatmap.

![sidebar funcs](/img/cluster-row-col-order.webp)

---

## Column Categories
Navigate to the bottom left of your screen. For per-sample categories, the column category box controls which categories will show at the top .
The maximum amount of column categories is 3, and you can add and remove column categories to fit others in. 

![column category gif](/img/cluster-col-cats.webp)

---

## Opacity
The opacity controls how pronounced the colours of the cells will be. For example, cells that would usually be lighter will have their boldness enhanced with enhanced opacity. The opacity is controlled with a slider, but can also be controlled with the **Chat With AI** feature. The max and min opacity is controlled by the max and min values in the respective dataset, and all other values are assigned a colour based on how close they are relative to the max and min.

![opacity-slider](/img/cluster-opacity-slider.webp)

---

## Search Box
The search box will find and highlight a single gene, with a limit of 1 (multiple genes cannot be highlighted).

![search box](/img/cluster-searchbox.webp)

---

## Birds-Eye View
The birds-eye view is an important tool to see the entire heatmap, what is visible within the heatmap, and to move around the heatmap efficiently. To traverse the heatmap, click and drag the box inside of the birds-eye view, and it will bring you to the corresponding position in the heatmap. The box is a representation of your perspective, and what you can see, like you’re looking through a window. Zooming in and out will change the size of the small box. Click the blue button on the sidebar to toggle the birds-eye view on or off. 

![birds-eye view](/img/cluster-toggle-minimap.webp)
![birds-eye view-gif](/img/minimap.png)

---

## Crop Mode
Click the crop button on the sidebar to activate crop mode. In crop mode, you can isolate a specific portion of the heatmap to study by dragging your cursor over the region you want to cut.
<!-- PLEASE FIX WHEN CROP MODE IS FIXED -->
![crop-gif](/img/cluster-crop-func.webp)

---

## Download
The download feature is available for you to download a certain heatmap in .csv format. Find it on the sidebar, next to crop and snapshot.

![download-gif](/img/cluster-download.webp)

---

## Snapshot
The snapshot feature takes a picture of the current heatmap, how you see it. Essentially, it will record your perspective at the moment you take the snapshot, and save an image of it to your computer. Therefore, if you are zoomed in to a specific region, it will save an image of what you see.

![snapshot-gif](/img/cluster-heatmap-img.webp)

---

## How to Cluster Cells
Click the “cluster” button on the row or the column on the left side. There will be a gray divider called a **dendrogram**. When you click it, it will show more details.

![dendrogram-gif](/img/cluster-dendro-display-click.webp)


At the bottom of the web page, there will be a slider that looks like this:  ![cluster-slider](/img/cluster_slider.png)
This controls how close the genes have to be to form a cluster. 

---

## Examples
Examples are sample datasets that can demonstrate the versatility of ClusterChirp. Click on each example to view the heatmap for different biological omics.

![photo of examples](/img/photo-of-examples.png)

