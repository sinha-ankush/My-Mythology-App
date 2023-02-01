package com.poojaarchana.webappapis.services;

import com.poojaarchana.webappapis.payloads.FeedbackDto;


import java.util.List;


public interface FeedbackService {

    FeedbackDto createFeedback(FeedbackDto feedbackDto);

    List<FeedbackDto> getAllFeedback();

    void deleteFeedback(Long userId);
}
