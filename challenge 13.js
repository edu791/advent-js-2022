function getFilesToBackup(lastBackup, changes) {
    const filesToBackup = new Set(
      changes
        .filter(change => change[1] > lastBackup)
        .map(change => change[0])
    );
  
    return Array.from(filesToBackup).sort((a,b) => a - b);
  }