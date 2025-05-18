# OFDjson
This is a really dumb name for it because it is simply the JSON data from Open Food Facts, split into one file per UPC product.

### Data Source
The original data comes from [Open Food Facts Data Download](https://world.openfoodfacts.org/data) downloaded as a JSONL.

### Processing Data
The data processing is done with [shardjsonl.ts](../scripts/shardjsonl.ts) which reads the multi-gigabyte file line-by-line and copies the data to its own JSON file. To create a new OFDjson process, change the ``JSONFilePath`` and ``JSONOutputPath`` to the location containing the uncompressed jsonl file and the location where all new OFDjson files will be placed.

The ``totalRoughly`` variable is only for percentages and does not accurately represent the actual amount of lines in the file. The number is taken from the [Hugging Face Dataset](https://huggingface.co/datasets/openfoodfacts/product-database) from the Parquet data rows.

### Downloading OFDjson
The archive can be downloaded [here](). Keep in mind that it is compressed using gzip compression level -9, and that once uncompressed, the ``products/`` folder takes about ~65GB of storage uncompressed.