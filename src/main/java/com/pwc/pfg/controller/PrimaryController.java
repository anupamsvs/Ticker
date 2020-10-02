package com.pwc.pfg.controller;


import com.pwc.pfg.model.ServerStatus;
import com.pwc.pfg.model.Ticker;
import com.pwc.pfg.service.TickerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class PrimaryController {

    @Autowired
    private TickerService tickerService;

    @RequestMapping(value="/ticker" , method=RequestMethod.GET)
    public List<Ticker> getAllTickers(Model model){
        List<Ticker> tickerList = tickerService.getAllTickers();
        return tickerList;
    }

    @RequestMapping(value = "/ticker", method = RequestMethod.POST)
    public void addTicker(@RequestBody Ticker ticker){
        tickerService.addTicker(ticker);
    }

    @RequestMapping(value = "/ticker/{id}", method = RequestMethod.PUT)
    public Ticker updateTicker(@RequestBody Ticker ticker, @PathVariable String id){
        ticker.setTickerId(id);
        ticker.setStatus(ServerStatus.AVAILABLE);
        tickerService.updateTicker(ticker, id);
        return ticker;
    }

    @RequestMapping(value = "/ticker/{id}", method = RequestMethod.DELETE)
    public void deleteTicker(@RequestBody Ticker ticker, @PathVariable String id){
        tickerService.deleteTicker(ticker, id);
    }

    @GetMapping("/admin")
    public String adminLogin(){
        return "admin";
    }

    @GetMapping("/logout")
    public String logout(){
        return "login";
    }

}
