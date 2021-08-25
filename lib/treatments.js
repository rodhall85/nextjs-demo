export async function getAllTreatmentIds() {
  const res = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/Table%201`, {
    headers: {
      'Authorization': 'Bearer ' + process.env.AIRTABLE_API_KEY,
    }
  });
  const data = await res.json();

  return data.records.map(record => {
    return {
      params: {
        id: record.fields.id.toString(),
      }
    }
  });
}

export async function getTreatments() {
  const res = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/Table%201`, {
    headers: {
      'Authorization': 'Bearer ' + process.env.AIRTABLE_API_KEY,
    }
  });
  const data = await res.json();

  return data.records;
}

export async function getTreatmentsData(id) {
  const records = await getTreatments();

  return records.filter(record => {
    return record.fields.id.toString() === id;
  })[0];
}
