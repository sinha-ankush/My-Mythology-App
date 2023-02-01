package com.poojaarchana.webappapis.services.impl;

import com.poojaarchana.webappapis.entities.Feedback;
import com.poojaarchana.webappapis.exceptions.ResourceNotFoundException;
import com.poojaarchana.webappapis.payloads.FeedbackDto;
import com.poojaarchana.webappapis.repositories.FeedbackRepository;
import com.poojaarchana.webappapis.services.FeedbackService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public FeedbackDto createFeedback(FeedbackDto feedbackDto) {
        Feedback feedback = this.dtoToFeedback(feedbackDto);
        Feedback savedFeedback = this.feedbackRepository.save(feedback);
        return this.feedbackToDto(savedFeedback);
    }

    @Override
    public List<FeedbackDto> getAllFeedback() {
        List<Feedback> feedbacks = this.feedbackRepository.findAll();
        return feedbacks.stream().map(this::feedbackToDto).collect(Collectors.toList());
    }

    @Override
    public void deleteFeedback(Long feedbackId) {
        Feedback feedback = this.feedbackRepository.findById(feedbackId).orElseThrow(() -> new ResourceNotFoundException("Feedback", "id", feedbackId));
        this.feedbackRepository.delete(feedback);
    }

    private Feedback dtoToFeedback(FeedbackDto feedbackDto) {
        return this.modelMapper.map(feedbackDto, Feedback.class);
    }

    public FeedbackDto feedbackToDto(Feedback feedback) {
        return this.modelMapper.map(feedback, FeedbackDto.class);
    }
}
