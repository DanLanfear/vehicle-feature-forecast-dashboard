package com.lanfear.vffd;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/forecasts")
@CrossOrigin(origins = "http://localhost:4200")
public class ForecastRecordController {

    private final ForecastRecordService service;

    @Autowired
    public ForecastRecordController(ForecastRecordService service) {
        this.service = service;
    }

    @GetMapping
    public List<ForecastRecord> findAllRecords() {
        System.out.println("GET");
        return this.service.findAllRecords();
    }

    @PostMapping
    public ForecastRecord saveRecord(@RequestBody ForecastRecord record) {
        return this.service.saveRecord(record);
    }

    @GetMapping("/summary")
    public ForecastSummaryDTO getSummary(@RequestBody List<Long> ids) {
        return this.service.getSummary(ids);
    }
}
