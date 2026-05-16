package com.lanfear.vffd;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class ForecastRecordService {

    private final ForecastRecordRepository repository;

    @Autowired
    public ForecastRecordService(ForecastRecordRepository repository) {
        this.repository = repository;
    }


}
