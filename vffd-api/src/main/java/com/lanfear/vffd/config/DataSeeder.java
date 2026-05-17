package com.lanfear.vffd.config;

import com.lanfear.vffd.ForecastRecord;
import com.lanfear.vffd.ForecastRecordRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DataSeeder {
    @Bean
    CommandLineRunner seedForecastRecords(ForecastRecordRepository repo) {
        return args -> {

            if (repo.count() > 0) {
                return;
            }

            repo.saveAll(List.of(

                    new ForecastRecord(
                            null,
                            "Tesla Model Y",
                            2026,
                            "NA",
                            "2026-Q1",
                            "ADAS-PKG",
                            "Advanced Driver Assistance",
                            120000,
                            78.5,
                            "system"
                    ),

                    new ForecastRecord(
                            null,
                            "Tesla Model 3",
                            2026,
                            "EU",
                            "2026-Q2",
                            "EV-RANGE",
                            "Extended Battery Range",
                            95000,
                            64.2,
                            "system"
                    ),

                    new ForecastRecord(
                            null,
                            "Ford F-150 Lightning",
                            2026,
                            "NA",
                            "2026-Q3",
                            "TOW-PKG",
                            "Smart Tow Package",
                            45000,
                            51.7,
                            "analyst-a"
                    ),

                    new ForecastRecord(
                            null,
                            "BMW iX",
                            2027,
                            "EU",
                            "2027-Q1",
                            "LUX-INT",
                            "Luxury Interior Package",
                            18000,
                            82.1,
                            "analyst-a"
                    ),

                    new ForecastRecord(
                            null,
                            "Hyundai Ioniq 5",
                            2026,
                            "APAC",
                            "2026-Q4",
                            "FAST-CHG",
                            "Ultra Fast Charging",
                            67000,
                            73.8,
                            "system"
                    ),

                    new ForecastRecord(
                            null,
                            "Toyota bZ4X",
                            2027,
                            "LATAM",
                            "2027-Q2",
                            "SAFE-SUITE",
                            "Safety Suite",
                            32000,
                            69.4,
                            "planner-1"
                    ),

                    new ForecastRecord(
                            null,
                            "Rivian R1T",
                            2026,
                            "NA",
                            "2026-Q2",
                            "OFFROAD",
                            "Off-Road Package",
                            15000,
                            57.3,
                            "planner-1"
                    ),

                    new ForecastRecord(
                            null,
                            "Mercedes EQE",
                            2027,
                            "EU",
                            "2027-Q3",
                            "AUTO-PARK",
                            "Automated Parking",
                            22000,
                            76.9,
                            "system"
                    ),

                    new ForecastRecord(
                            null,
                            "Kia EV9",
                            2026,
                            "APAC",
                            "2026-Q1",
                            "3ROW-SEAT",
                            "Three Row Seating",
                            41000,
                            61.5,
                            "forecast-bot"
                    ),

                    new ForecastRecord(
                            null,
                            "Lucid Air",
                            2027,
                            "NA",
                            "2027-Q4",
                            "PREM-AUDIO",
                            "Premium Audio System",
                            9000,
                            88.0,
                            "forecast-bot"
                    )
            ));
        };
    }
}