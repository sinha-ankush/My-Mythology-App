package com.poojaarchana.webappapis.controllers;



import com.poojaarchana.webappapis.payloads.ApiResponse;
import com.poojaarchana.webappapis.payloads.FeedbackDto;
import com.poojaarchana.webappapis.payloads.UserDto;
import com.poojaarchana.webappapis.services.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/create")
    public ResponseEntity<FeedbackDto> createFeedback(@RequestBody FeedbackDto feedbackDto) {
        FeedbackDto createdFeedbackDto = this.feedbackService.createFeedback(feedbackDto);
        return new ResponseEntity<>(createdFeedbackDto, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<FeedbackDto>> getAllFeedback() {
        return ResponseEntity.ok(this.feedbackService.getAllFeedback());
    }

    @DeleteMapping("/delete/{feedbackId}")
    public ResponseEntity<ApiResponse> deleteFeedback(@PathVariable Long feedbackId) {
        this.feedbackService.deleteFeedback(feedbackId);
        return new ResponseEntity<ApiResponse>(new ApiResponse("User Deleted Successfully.", true), HttpStatus.OK);
    }

}
