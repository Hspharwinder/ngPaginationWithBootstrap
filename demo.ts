get pagingMarketData(): [] {
    return this.marketData
      .map((marketData, i) => ({ id: i + 1, ...marketData }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
