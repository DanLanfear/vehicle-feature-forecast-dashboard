package com.lanfear.vffd;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ForecastRecordService {

    private final ForecastRecordRepository repository;

    @Autowired
    public ForecastRecordService(ForecastRecordRepository repository) {
        this.repository = repository;
    }

    /**
     * Gets all the forecast records from the database
     *
     * @return The forecast records as a List
     */
    public List<ForecastRecord> findAllRecords() {
        return this.repository.findAll();
    }

    /**
     * Saves a record into the database
     *
     * @param record the record to save
     * @return the record saved in the database
     */
    public ForecastRecord saveRecord(ForecastRecord record) {
        // check required fields first
        return this.repository.save(record);
    }

    /**
     * Returns a summary DTO with the total volume and average adoption rate of the listed records
     *
     * @param ids The ids of the records to use the data from
     * @return a summary DTO with the data pertaining to the records
     */
    public ForecastSummaryDTO getSummary(List<Long> ids) {
        int totalProjectedVolume = 0;
        double totalAdoptionPercentage = 0.0;
        List<ForecastRecord> forecastRecords = this.repository.findAllById(ids);

        for (ForecastRecord fr : forecastRecords) {
            totalProjectedVolume += fr.getProjectedVolume();
            totalAdoptionPercentage += fr.getAdoptionRate();
        }
        double averageAdoptionPercentage = totalAdoptionPercentage / forecastRecords.size();

        return new ForecastSummaryDTO(ids, totalProjectedVolume, averageAdoptionPercentage);
    }

}
