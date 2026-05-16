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

}
